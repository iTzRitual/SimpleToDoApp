import { useState } from "react";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [toDoItems, setToDoItems] = useState([
    { name: "Zadanie 1", done: false, id: 1 },
    { name: "Zadanie 2", done: true, id: 2 },
    { name: "Zadanie 3", done: false, id: 3 },
    { name: "Zadanie 4", done: false, id: 4 },
    { name: "Zadanie 5", done: true, id: 5 },
  ]);
  const handleAddTask = (event) => {
    event.preventDefault();
    inputValue &&
      (setToDoItems((prevToDoItems) => [
        ...prevToDoItems,
        { name: inputValue, done: false, id: toDoItems.length + 1 },
      ]),
      setInputValue(""));
  };
  const toggleTaskStatus = (id) => {
    setToDoItems((prevToDoItems) =>
      prevToDoItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };
  const removeTask = (id) => {
    setToDoItems((prevToDoItems) => {
      const filteredItems = prevToDoItems.filter((item) => item.id !== id);
      const updatedItems = filteredItems.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      return updatedItems;
    });
  };

  return (
    <div className="b flex max-h-full w-[500px] flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-md max-sm:w-full">
      <Header
        toDoItems={toDoItems}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {showForm && (
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddTask={handleAddTask}
        />
      )}
      <List
        items={toDoItems}
        onToggle={toggleTaskStatus}
        onRemove={removeTask}
      />
    </div>
  );
}

export default App;

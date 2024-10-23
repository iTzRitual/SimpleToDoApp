export function Header({ toDoItems, showForm, setShowForm }) {
  const getTaskLabel = (count) => {
    switch (true) {
      case count === 1:
        return "zadanie";
      case count > 1 && count < 5:
        return "zadania";
      default:
        return "zadań";
    }
  };
  return (
    <header className="flex justify-between items items-center pb-3">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          {toDoItems.length ? "Do zrobienia" : "Wszystko zrobione"}
        </h1>
        {toDoItems.length ? (
          <h2 className="text-2xl font-medium text-slate-600">
            {toDoItems.length} {getTaskLabel(toDoItems.length)}
          </h2>
        ) : (
          ""
        )}
      </div>
      <button
        className={`text-xl bg-slate-200 border border-transparent rounded-full block w-12 h-12 transition-all hover:bg-blue-400 hover:text-slate-50 ${showForm ? "rotate-45 bg-red-200 hover:bg-red-400" : ""}`}
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        +
      </button>
    </header>
  );
}

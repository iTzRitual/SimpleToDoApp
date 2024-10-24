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
    <header className="items flex items-center justify-between pb-3">
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
        className={`block h-12 w-12 rounded-full border border-transparent bg-slate-200 text-xl leading-none transition-all hover:bg-blue-400 hover:text-slate-50 ${showForm ? "rotate-45 bg-red-200 hover:bg-red-400" : ""}`}
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        +
      </button>
    </header>
  );
}

import { ActionButton } from "./ActionButton";

export function Form({ inputValue, setInputValue, handleAddTask }) {
  return (
    <form
      onSubmit={handleAddTask}
      className="border-t flex justify-between py-4"
    >
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        className="border border-slate-400 w-full rounded px-1"
        type="text"
      />
      <ActionButton
        className={"hover:bg-blue-400 hover:text-white hover:border-blue-400"}
      >
        Dodaj
      </ActionButton>
    </form>
  );
}

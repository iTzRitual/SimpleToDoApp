import { ActionButton } from "./ActionButton";

export function ListElement({ item, onRemove, onToggle }) {
  return (
    <div className="border-t flex justify-between py-4" key={item.id}>
      <span className={item.done ? "line-through" : ""}>{item.name}</span>
      <div className="flex">
        <ActionButton
          className={
            item.done
              ? "bg-yellow-100 hover:bg-yellow-400 hover:text-slate-900 hover:border-yellow-400"
              : "bg-green-100 hover:bg-green-400 hover:text-slate-900 hover:border-green-400"
          }
          handleButtonClick={() => {
            onToggle(item.id);
          }}
        >
          {item.done ? "Przywróć" : "Zrobione"}
        </ActionButton>
        <ActionButton
          className={
            "bg-red-100 hover:bg-red-400 hover:text-white hover:border-red-400"
          }
          handleButtonClick={() => {
            onRemove(item.id);
          }}
        >
          Usuń
        </ActionButton>
      </div>
    </div>
  );
}

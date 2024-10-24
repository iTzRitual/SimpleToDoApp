import { ActionButton } from "./ActionButton";

export function ListElement({ item, onRemove, onToggle }) {
  return (
    <div className="flex justify-between border-t py-4" key={item.id}>
      <span className={`{item.done ? "line-through" : ""} break-words`}>
        {item.name}
      </span>
      <div className="flex items-center">
        <ActionButton
          className={
            item.done
              ? "bg-yellow-100 hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
              : "bg-green-100 hover:border-green-400 hover:bg-green-400 hover:text-slate-900"
          }
          handleButtonClick={() => {
            onToggle(item.id);
          }}
        >
          {item.done ? "Przywróć" : "Zrobione"}
        </ActionButton>
        <ActionButton
          className={
            "bg-red-100 hover:border-red-400 hover:bg-red-400 hover:text-white"
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

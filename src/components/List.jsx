import { ListElement } from "./ListElement";

export function List({ items, onRemove, onToggle }) {
  return (
    <div className="overflow-y-auto h-full">
      {items
        .sort((a, b) => (a.done === b.done ? b.id - a.id : a.done - b.done))
        .map((item) => (
          <ListElement
            key={item.id}
            item={item}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
    </div>
  );
}

export function ActionButton({ className, handleButtonClick, children }) {
  return (
    <button
      className={`border border-slate-400 px-2 text-xs rounded ml-3 transition-colors ${className}`}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
}

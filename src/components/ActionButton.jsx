export function ActionButton({ className, handleButtonClick, children }) {
  return (
    <button
      className={`ml-3 rounded border border-slate-400 px-2 py-0.5 text-xs transition-colors ${className}`}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
}

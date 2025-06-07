export default function ColorGrid({ colors, onSave }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
      {colors.map((color) => (
        <div key={color.hex} className="flex flex-col items-center">
          <div
            className="w-16 h-16 rounded"
            style={{ backgroundColor: color.hex }}
          ></div>
          <span className="text-sm mt-1">{color.hex}</span>
          <button
            onClick={() => onSave(color)}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >
            Save
          </button>
        </div>
      ))}
    </div>
  );
}
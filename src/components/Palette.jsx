export default function Palette({ palette, onRemove }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Your Palette</h3>
      <div className="flex flex-wrap gap-4">
        {palette.map((color) => (
          <div key={color.hex} className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded"
              style={{ backgroundColor: color.hex }}
            ></div>
            <span className="text-sm mt-1">{color.hex}</span>
            <button
              onClick={() => onRemove(color)}
              className="mt-1 text-xs text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from "react";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  defaultColor?: string;
}

export function ColorPicker({
  label,
  value,
  onChange,
  defaultColor = "#ffffff",
}: ColorPickerProps) {
  const currentColor = value || defaultColor;

  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium text-gray-300 mb-1">
        {label}
      </label>

      <div className="flex items-center gap-2 flex-wrap">
        {/* Color input */}
        <div className="relative">
          <input
            type="color"
            value={currentColor}
            onChange={(e) => onChange(e.target.value)}
            className="w-10 h-8 rounded border border-zinc-600 cursor-pointer bg-transparent"
          />
        </div>

        {/* Hex input */}
        <input
          type="text"
          value={currentColor}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#ffffff"
          className="flex-1 px-3 py-1.5 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none text-sm"
        />

        {/* Reset button */}
        <button
          type="button"
          onClick={() => onChange(defaultColor)}
          className="px-2 py-1.5 text-xs text-gray-400 hover:text-white border border-zinc-600 rounded hover:border-zinc-500 transition-colors"
          title="Reset to default"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

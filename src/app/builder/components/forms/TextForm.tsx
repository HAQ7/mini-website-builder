import React from "react";
import { SectionText } from "@/app/builder/types/sections";
import { ColorPicker } from "./ColorPicker";

interface TextFormProps {
  section: SectionText;
  onUpdate: (updates: Partial<SectionText>) => void;
}

export function TextForm({ section, onUpdate }: TextFormProps) {
  const handleInputChange = (field: keyof SectionText, value: string) => {
    onUpdate({ [field]: value } as Partial<SectionText>);
  };

  return (
    <div className="p-3 bg-zinc-800 rounded-lg space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1">
          Title
        </label>
        <input
          type="text"
          value={section.title || ""}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter section title..."
          className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1">
          Content
        </label>
        <textarea
          value={section.content || ""}
          onChange={(e) => handleInputChange("content", e.target.value)}
          placeholder="Enter section content..."
          className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none resize-none"
          rows={3}
        />
      </div>
      
      <div className="grid gap-3">
        <ColorPicker
          label="Background Color"
          value={section.bgColor || "#ffffff"}
          onChange={(color) => handleInputChange("bgColor", color)}
          defaultColor="#ffffff"
        />
        <ColorPicker
          label="Text Color"
          value={section.textColor || "#000000"}
          onChange={(color) => handleInputChange("textColor", color)}
          defaultColor="#000000"
        />
      </div>
    </div>
  );
}

import React from "react";
import { SectionImage } from "@/app/builder/types/sections";
import { ColorPicker } from "./ColorPicker";

interface ImageFormProps {
  section: SectionImage;
  onUpdate: (updates: Partial<SectionImage>) => void;
}

export function ImageForm({ section, onUpdate }: ImageFormProps) {
  const handleInputChange = (field: keyof SectionImage, value: string) => {
    onUpdate({ [field]: value } as Partial<SectionImage>);
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
          Image URL
        </label>
        <input
          type="url"
          value={section.imageUrl || ""}
          onChange={(e) => handleInputChange("imageUrl", e.target.value)}
          placeholder="Enter image URL..."
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
          value={section.bgColor || "#f9fafb"}
          onChange={(color) => handleInputChange("bgColor", color)}
          defaultColor="#f9fafb"
        />
        <ColorPicker
          label="Text Color"
          value={section.textColor || "#111827"}
          onChange={(color) => handleInputChange("textColor", color)}
          defaultColor="#111827"
        />
      </div>
    </div>
  );
}

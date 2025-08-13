import React from "react";
import { SectionFooter } from "@/app/builder/types/sections";
import { ColorPicker } from "./ColorPicker";

interface FooterFormProps {
  section: SectionFooter;
  onUpdate: (updates: Partial<SectionFooter>) => void;
}

export function FooterForm({ section, onUpdate }: FooterFormProps) {
  const handleInputChange = (field: keyof SectionFooter, value: string) => {
    onUpdate({ [field]: value } as Partial<SectionFooter>);
  };

  return (
    <div className="p-3 bg-zinc-800 rounded-lg space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1">
          Logo URL
        </label>
        <input
          type="url"
          value={section.logo || ""}
          onChange={(e) => handleInputChange("logo", e.target.value)}
          placeholder="Enter logo URL..."
          className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1">
          Middle Text
        </label>
        <input
          type="text"
          value={section.middleText || ""}
          onChange={(e) => handleInputChange("middleText", e.target.value)}
          placeholder="Enter footer title..."
          className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-1">
          Right Text
        </label>
        <textarea
          value={section.rightText || ""}
          onChange={(e) => handleInputChange("rightText", e.target.value)}
          placeholder="Enter footer content..."
          className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none resize-none"
          rows={3}
        />
      </div>
      
      <div className="grid gap-3">
        <ColorPicker
          label="Background Color"
          value={section.bgColor || "#111827"}
          onChange={(color) => handleInputChange("bgColor", color)}
          defaultColor="#111827"
        />
        <ColorPicker
          label="Text Color"
          value={section.textColor || "#ffffff"}
          onChange={(color) => handleInputChange("textColor", color)}
          defaultColor="#ffffff"
        />
      </div>
    </div>
  );
}

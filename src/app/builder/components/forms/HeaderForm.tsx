import React from "react";
import { SectionHeader } from "@/app/builder/types/sections";
import { ColorPicker } from "./ColorPicker";

interface HeaderFormProps {
  section: SectionHeader;
  onUpdate: (updates: Partial<SectionHeader>) => void;
}

export function HeaderForm({ section, onUpdate }: HeaderFormProps) {
  const handleInputChange = (field: keyof SectionHeader, value: string) => {
    onUpdate({ [field]: value } as Partial<SectionHeader>);
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
          Navigation Links
        </label>
        <div className="space-y-3">
          {section.navigationLinks?.map((link, index) => (
            <div key={index} className="bg-zinc-700 p-3 rounded border border-zinc-600">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-300">Link {index + 1}</span>
                <button
                  type="button"
                  onClick={() => {
                    const newLinks = [...(section.navigationLinks || [])];
                    newLinks.splice(index, 1);
                    onUpdate({ navigationLinks: newLinks });
                  }}
                  className="text-red-400 hover:text-red-300 text-xs"
                >
                  Remove
                </button>
              </div>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Link Name</label>
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) => {
                      const newLinks = [...(section.navigationLinks || [])];
                      newLinks[index] = { ...newLinks[index], label: e.target.value };
                      onUpdate({ navigationLinks: newLinks });
                    }}
                    placeholder="Enter link name..."
                    className="w-full px-3 py-2 bg-zinc-600 text-white rounded border border-zinc-500 focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Link URL</label>
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) => {
                      const newLinks = [...(section.navigationLinks || [])];
                      newLinks[index] = { ...newLinks[index], href: e.target.value };
                      onUpdate({ navigationLinks: newLinks });
                    }}
                    placeholder="Enter link URL..."
                    className="w-full px-3 py-2 bg-zinc-600 text-white rounded border border-zinc-500 focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={() => {
              const newLinks = [...(section.navigationLinks || []), { label: "", href: "" }];
              onUpdate({ navigationLinks: newLinks });
            }}
            className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
          >
            + Add Navigation Link
          </button>
        </div>
      </div>
      
      <div className="grid gap-3">
        <ColorPicker
          label="Background Color"
          value={section.bgColor || "#1f2937"}
          onChange={(color) => handleInputChange("bgColor", color)}
          defaultColor="#1f2937"
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

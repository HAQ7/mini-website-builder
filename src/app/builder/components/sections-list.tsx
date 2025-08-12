"use client";

import React, { useState } from "react";
import { useSections, SectionType } from "@/app/builder/store/section-context";
import {
    GripVertical,
    X,
    FileText,
    Image,
    ChevronDown,
    ChevronRight,
    Edit2,
} from "lucide-react";

// Get section type from section data
function getSectionType(
    section: SectionType
): "header" | "text" | "image" | "footer" {
    if ("imageUrl" in section) return "image";
    if ("title" in section && "content" in section) return "text";
    if ("content" in section && !("title" in section)) return "header";
    return "footer";
}

// Get section icon based on type
function getSectionIcon(type: string) {
    switch (type) {
        case "text":
            return <FileText className="w-4 h-4" />;
        case "image":
            return <Image className="w-4 h-4" />;

        default:
            return <FileText className="w-4 h-4" />;
    }
}

// Get section title for display
function getSectionTitle(section: SectionType): string {
    const type = getSectionType(section);

    if (type === "header") {
        return (section as any).content?.substring(0, 20) + "..." || "Header";
    }

    if ("title" in section && section.title) {
        return (
            section.title.substring(0, 20) +
            (section.title.length > 20 ? "..." : "")
        );
    }

    return type.charAt(0).toUpperCase() + type.slice(1);
}

interface SectionEditorProps {
    section: SectionType;
    onUpdate: (updates: Partial<SectionType>) => void;
}

function SectionEditor({ section, onUpdate }: SectionEditorProps) {
    const sectionType = getSectionType(section);

    const handleInputChange = (field: string, value: string) => {
        onUpdate({ [field]: value } as Partial<SectionType>);
    };

    return (
        <div className="p-3 bg-zinc-800 rounded-lg space-y-3">
            {/* Header Section */}
            {sectionType === "header" && (
                <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                        Content
                    </label>
                    <textarea
                        value={(section as any).content || ""}
                        onChange={e =>
                            handleInputChange("content", e.target.value)
                        }
                        placeholder="Enter header content..."
                        className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none resize-none"
                        rows={2}
                    />
                </div>
            )}

            {/* Text Section */}
            {sectionType === "text" && (
                <>
                    <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            value={(section as any).title || ""}
                            onChange={e =>
                                handleInputChange("title", e.target.value)
                            }
                            placeholder="Enter section title..."
                            className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                            Content
                        </label>
                        <textarea
                            value={(section as any).content || ""}
                            onChange={e =>
                                handleInputChange("content", e.target.value)
                            }
                            placeholder="Enter section content..."
                            className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none resize-none"
                            rows={3}
                        />
                    </div>
                </>
            )}

            {/* Image Section */}
            {sectionType === "image" && (
                <>
                    <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            value={(section as any).title || ""}
                            onChange={e =>
                                handleInputChange("title", e.target.value)
                            }
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
                            value={(section as any).imageUrl || ""}
                            onChange={e =>
                                handleInputChange("imageUrl", e.target.value)
                            }
                            placeholder="Enter image URL..."
                            className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                            Content
                        </label>
                        <textarea
                            value={(section as any).content || ""}
                            onChange={e =>
                                handleInputChange("content", e.target.value)
                            }
                            placeholder="Enter section content..."
                            className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none resize-none"
                            rows={3}
                        />
                    </div>
                </>
            )}

            {/* Footer Section */}
            {sectionType === "footer" && (
                <>
                    <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            value={(section as any).title || ""}
                            onChange={e =>
                                handleInputChange("title", e.target.value)
                            }
                            placeholder="Enter footer title..."
                            className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                            Content
                        </label>
                        <textarea
                            value={(section as any).content || ""}
                            onChange={e =>
                                handleInputChange("content", e.target.value)
                            }
                            placeholder="Enter footer content..."
                            className="w-full px-3 py-2 bg-zinc-700 text-white rounded border border-zinc-600 focus:border-blue-500 focus:outline-none resize-none"
                            rows={3}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

interface SectionItemProps {
    section: SectionType;
    index: number;
    onDragStart: (index: number) => void;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: (index: number) => void;
    onRemove: (id: string) => void;
    onUpdate: (id: string, updates: Partial<SectionType>) => void;
    isDragging: boolean;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

function SectionItem({
    section,
    index,
    onDragStart,
    onDragOver,
    onDrop,
    onRemove,
    onUpdate,
    isDragging,
    isCollapsed,
    onToggleCollapse,
}: SectionItemProps) {
    const sectionType = getSectionType(section);
    const title = getSectionTitle(section);

    const handleUpdate = (updates: Partial<SectionType>) => {
        onUpdate(section.id, updates);
    };

    return (
        <div
            className={`rounded-lg transition-all duration-200 ${
                isDragging ? "opacity-50 rotate-1" : ""
            }`}
        >
            {/* Section Header */}
            <div
                draggable
                onDragStart={() => onDragStart(index)}
                onDragOver={onDragOver}
                onDrop={() => onDrop(index)}
                className="flex items-center gap-2 p-2 bg-zinc-700 rounded-lg cursor-move hover:bg-zinc-600 group"
            >
                <GripVertical className="w-4 h-4 text-gray-400 group-hover:text-white" />

                <button
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        onToggleCollapse();
                    }}
                    className="text-gray-400 hover:text-white p-0.5"
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </button>

                <div className="text-gray-300">
                    {getSectionIcon(sectionType)}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="text-sm text-white truncate">{title}</div>
                    <div className="text-xs text-gray-400 capitalize">
                        {sectionType}
                    </div>
                </div>

                {!isCollapsed && <Edit2 className="w-3 h-3 text-gray-400" />}

                <button
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        onRemove(section.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/20 rounded"
                    title="Remove section"
                >
                    <X className="w-4 h-4 text-red-400 hover:text-red-300" />
                </button>
            </div>

            {/* Section Editor (Collapsible) */}
            {!isCollapsed && (
                <div className="mt-2">
                    <SectionEditor section={section} onUpdate={handleUpdate} />
                </div>
            )}
        </div>
    );
}

export default function SectionsList() {
    const { sections, removeSection, reorderSections, updateSection } =
        useSections();
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
        new Set()
    );

    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (dropIndex: number) => {
        if (draggedIndex !== null && draggedIndex !== dropIndex) {
            reorderSections(draggedIndex, dropIndex);
        }
        setDraggedIndex(null);
    };

    const handleRemove = (id: string) => {
        removeSection(id);
        // Remove from collapsed set if it exists
        setCollapsedSections(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
    };

    const handleUpdate = (id: string, updates: Partial<SectionType>) => {
        updateSection(id, updates);
    };

    const toggleCollapse = (sectionId: string) => {
        setCollapsedSections(prev => {
            const newSet = new Set(prev);
            if (newSet.has(sectionId)) {
                newSet.delete(sectionId);
            } else {
                newSet.add(sectionId);
            }
            return newSet;
        });
    };

    if (sections.length === 0) {
        return (
            <div className="p-4 text-center">
                <div className="text-zinc-500 text-sm">
                    No sections added yet. Use the section picker below to add
                    sections.
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <div className="px-2 pb-2">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-white">
                        Sections ({sections.length})
                    </h3>
                    <div className="flex gap-1">
                        <button
                            onClick={() => setCollapsedSections(new Set())}
                            className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-zinc-600"
                            title="Expand all"
                        >
                            Expand All
                        </button>
                        <button
                            onClick={() =>
                                setCollapsedSections(
                                    new Set(sections.map(s => s.id))
                                )
                            }
                            className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-zinc-600"
                            title="Collapse all"
                        >
                            Collapse All
                        </button>
                    </div>
                </div>
                <div className="space-y-2">
                    {sections.map((section, index) => (
                        <SectionItem
                            key={section.id}
                            section={section}
                            index={index}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            onRemove={handleRemove}
                            onUpdate={handleUpdate}
                            isDragging={draggedIndex === index}
                            isCollapsed={collapsedSections.has(section.id)}
                            onToggleCollapse={() => toggleCollapse(section.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

"use client";

import { Upload } from "lucide-react";
import { useSections } from "../store/section-context";
import { useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


export function ImportButton() {
    const { setSections } = useSections();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImport = () => {
        fileInputRef.current?.click();
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target?.result as string);
                if (importedData.sections && Array.isArray(importedData.sections)) {
                    // Replace current sections with imported ones
                    setSections(importedData.sections);
                } else {
                    alert('Invalid file format. Please select a valid design JSON file.');
                }
            } catch (error) {
                alert('Error reading file. Please ensure it\'s a valid JSON file.');
            }
        };
        reader.readAsText(file);
        
        // Reset the input value so the same file can be selected again
        event.target.value = '';
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Upload
                    className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors"
                    onClick={handleImport}
                />
            </TooltipTrigger>
            <TooltipContent>
                Import Design
            </TooltipContent>
            <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
            />
        </Tooltip>
    );
}

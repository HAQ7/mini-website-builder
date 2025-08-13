"use client";

import { Download } from "lucide-react";
import { useSections } from "../store/section-context";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ExportButton() {
  const { sections } = useSections();

  const handleExport = () => {
    const designData = {
      sections,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };

    const dataStr = JSON.stringify(designData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `website-design-${
      new Date().toISOString().split("T")[0]
    }.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <Download
          className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors"
          onClick={handleExport}
        />
      </TooltipTrigger>
      <TooltipContent>Export Design</TooltipContent>
    </Tooltip>
  );
}

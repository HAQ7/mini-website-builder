"use client";

import React from "react";
import { useSections, SectionType } from "../store/section-context";
import FooterSection from "./sections/footer";
import {
  SectionFooter,
  SectionHeader,
  SectionImage,
  SectionText,
} from "../types/sections";
import ImageSection from "./sections/image";
import HeaderSection from "./sections/header";
import TextSection from "./sections/text";
import { getSectionType } from "../util/get-section-type";
import { WrenchIcon } from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

// Get section type from section data

interface SectionRendererProps {
  section: SectionType;
}

function SectionRenderer({ section }: SectionRendererProps) {
  const sectionType = getSectionType(section);

  const renderSection = () => {
    switch (sectionType) {
      case "header":
        return <HeaderSection section={section as SectionHeader} />;

      case "text":
        return <TextSection section={section as SectionText} />;

      case "image":
        return <ImageSection section={section as SectionImage} />;

      case "footer":
        return <FooterSection section={section as SectionFooter} />;

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      layout
    >
      {renderSection()}
    </motion.div>
  );
}

interface EmptyStateProps {}

function EmptyState({}: EmptyStateProps) {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-md">
        <motion.div 
          className="w-24 h-24 mx-auto mb-8 bg-zinc-100 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3, type: "spring", stiffness: 200 }}
        >
          <WrenchIcon size={42} color="#9ca3af" />
        </motion.div>
        <motion.h2 
          className="text-2xl font-bold text-zinc-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          Start Building Your Page
        </motion.h2>
        <motion.p 
          className="text-zinc-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          Add sections from the sidebar to see your page come to life. You can
          drag and drop to reorder them anytime.
        </motion.p>
        <motion.div 
          className="bg-zinc-50 border border-zinc-200 rounded-lg p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <p className="text-sm text-zinc-700">
            <span className="font-semibold">Tip:</span> Use the section picker
            in the sidebar to add headers, text, images, and footers to your
            page.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function LivePreview() {
  const { sections } = useSections();

  return (
    <div className="w-full max-w-7xl bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Preview Header */}
      <div className="bg-zinc-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm font-medium">Live Preview</span>
        </div>
        <div className="text-xs text-zinc-400">
          {sections.length} section{sections.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Preview Content */}
      <div className="min-h-[70vh] bg-white">
        <AnimatePresence mode="wait">
          {sections.length === 0 ? (
            <EmptyState key="empty-state" />
          ) : (
            <motion.div 
              key="sections-container"
              className="space-y-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence>
                {sections.map((section, index) => (
                  <motion.div 
                    key={section.id} 
                    className="relative group"
                    layout
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {/* Section Index Indicator */}
                    <motion.div 
                      className="absolute top-4 left-4 z-10 bg-zinc-900/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Section {index + 1}
                    </motion.div>
                    <SectionRenderer section={section} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

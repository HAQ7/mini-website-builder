'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SectionText, SectionImage, SectionHeader, SectionFooter } from '../types/sections';

// Union type for all section types
export type SectionType = SectionText | SectionImage | SectionHeader | SectionFooter;

// Context type definition
interface SectionContextType {
    sections: SectionType[];
    addSection: (sectionType: 'header' | 'text' | 'image' | 'footer') => void;
    removeSection: (id: string) => void;
    updateSection: (id: string, updates: Partial<SectionType>) => void;
    reorderSections: (startIndex: number, endIndex: number) => void;
}

// Create the context
const SectionContext = createContext<SectionContextType | undefined>(undefined);

// Provider component
export function SectionProvider({ children }: { children: ReactNode }) {
    const [sections, setSections] = useState<SectionType[]>([]);

    const addSection = (sectionType: 'header' | 'text' | 'image' | 'footer') => {
        const id = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        let newSection: SectionType;
        
        switch (sectionType) {
            case 'header':
                newSection = {
                    id,
                    content: 'New Header Content'
                } as SectionHeader;
                break;
            case 'text':
                newSection = {
                    id,
                    title: 'New Section Title',
                    content: 'New section content goes here...'
                } as SectionText;
                break;
            case 'image':
                newSection = {
                    id,
                    title: 'New Image Section',
                    content: 'Section with image content...',
                    imageUrl: '/placeholder-image.jpg'
                } as SectionImage;
                break;
            case 'footer':
                newSection = {
                    id,
                    title: 'Footer Title',
                    content: 'Footer content goes here...'
                } as SectionFooter;
                break;
            default:
                throw new Error(`Unknown section type: ${sectionType}`);
        }
        
        setSections(prev => [...prev, newSection]);
    };

    const removeSection = (id: string) => {
        setSections(prev => prev.filter(section => section.id !== id));
    };

    const updateSection = (id: string, updates: Partial<SectionType>) => {
        setSections(prev => 
            prev.map(section => 
                section.id === id ? { ...section, ...updates } : section
            )
        );
    };

    const reorderSections = (startIndex: number, endIndex: number) => {
        setSections(prev => {
            const result = Array.from(prev);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
        });
    };

    return (
        <SectionContext.Provider value={{
            sections,
            addSection,
            removeSection,
            updateSection,
            reorderSections
        }}>
            {children}
        </SectionContext.Provider>
    );
}

// Custom hook to use the section context
export function useSections() {
    const context = useContext(SectionContext);
    if (context === undefined) {
        throw new Error('useSections must be used within a SectionProvider');
    }
    return context;
}
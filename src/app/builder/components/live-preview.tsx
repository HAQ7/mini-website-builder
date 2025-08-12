'use client';

import React from 'react';
import { useSections, SectionType } from '../store/section-context';

// Get section type from section data
function getSectionType(section: SectionType): 'header' | 'text' | 'image' | 'footer' {
    if ('imageUrl' in section) return 'image';
    if ('title' in section && 'content' in section) return 'text';
    if ('content' in section && !('title' in section)) return 'header';
    return 'footer';
}

interface SectionRendererProps {
    section: SectionType;
}

function SectionRenderer({ section }: SectionRendererProps) {
    const sectionType = getSectionType(section);

    switch (sectionType) {
        case 'header':
            return (
                <header className="w-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-16 px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            {(section as any).content || 'Header Content'}
                        </h1>
                    </div>
                </header>
            );

        case 'text':
            return (
                <section className="w-full py-16 px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                            {(section as any).title || 'Section Title'}
                        </h2>
                        <div className="text-lg text-zinc-700 leading-relaxed space-y-4">
                            {((section as any).content || 'Section content goes here...').split('\n').map((paragraph: string, index: number) => (
                                paragraph.trim() ? (
                                    <p key={index}>{paragraph}</p>
                                ) : (
                                    <br key={index} />
                                )
                            ))}
                        </div>
                    </div>
                </section>
            );

        case 'image':
            return (
                <section className="w-full py-16 px-8 bg-zinc-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                                    {(section as any).title || 'Image Section Title'}
                                </h2>
                                <div className="text-lg text-zinc-700 leading-relaxed space-y-4">
                                    {((section as any).content || 'Image section content goes here...').split('\n').map((paragraph: string, index: number) => (
                                        paragraph.trim() ? (
                                            <p key={index}>{paragraph}</p>
                                        ) : (
                                            <br key={index} />
                                        )
                                    ))}
                                </div>
                            </div>
                            <div className="order-first md:order-last">
                                {(section as any).imageUrl ? (
                                    <img 
                                        src={(section as any).imageUrl} 
                                        alt={(section as any).title || 'Section image'}
                                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const placeholder = target.nextElementSibling as HTMLElement;
                                            if (placeholder) placeholder.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div 
                                    className="w-full h-64 md:h-80 bg-zinc-200 rounded-lg shadow-lg flex items-center justify-center"
                                    style={{ display: (section as any).imageUrl ? 'none' : 'flex' }}
                                >
                                    <div className="text-center text-zinc-500">
                                        <svg className="w-16 h-16 mx-auto mb-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-sm">Image placeholder</p>
                                        <p className="text-xs mt-1">Add an image URL to display here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );

        case 'footer':
            return (
                <footer className="w-full bg-zinc-900 text-white py-16 px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            {(section as any).title || 'Footer Title'}
                        </h3>
                        <div className="text-zinc-300 leading-relaxed space-y-4">
                            {((section as any).content || 'Footer content goes here...').split('\n').map((paragraph: string, index: number) => (
                                paragraph.trim() ? (
                                    <p key={index}>{paragraph}</p>
                                ) : (
                                    <br key={index} />
                                )
                            ))}
                        </div>
                    </div>
                </footer>
            );

        default:
            return null;
    }
}

interface EmptyStateProps {}

function EmptyState({}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-8">
            <div className="max-w-md">
                <div className="w-24 h-24 mx-auto mb-8 bg-zinc-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                    Start Building Your Page
                </h2>
                <p className="text-zinc-600 mb-8">
                    Add sections from the sidebar to see your page come to life. You can drag and drop to reorder them anytime.
                </p>
                <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                    <p className="text-sm text-zinc-700">
                        <span className="font-semibold">Tip:</span> Use the section picker in the sidebar to add headers, text, images, and footers to your page.
                    </p>
                </div>
            </div>
        </div>
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
                    {sections.length} section{sections.length !== 1 ? 's' : ''}
                </div>
            </div>

            {/* Preview Content */}
            <div className="min-h-[70vh] bg-white">
                {sections.length === 0 ? (
                    <EmptyState />
                ) : (
                    <div className="space-y-0">
                        {sections.map((section, index) => (
                            <div key={section.id} className="relative group">
                                {/* Section Index Indicator */}
                                <div className="absolute top-4 left-4 z-10 bg-zinc-900/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    Section {index + 1}
                                </div>
                                <SectionRenderer section={section} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
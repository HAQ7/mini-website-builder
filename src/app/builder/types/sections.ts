interface Section {
        id: string;
}

export interface SectionText extends Section {
    title: string;
    content: string;
};

export interface SectionImage extends SectionText {
    imageUrl: string;
};

export interface SectionHeader extends Section {
    content: string;
};

export interface SectionFooter extends Section {
    title: string;
    content: string;
};

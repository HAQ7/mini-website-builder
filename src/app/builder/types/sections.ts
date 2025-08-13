export interface Section {
        id: string;
        bgColor?: string;
        textColor?: string;
}

export interface SectionText extends Section {
    title: string;
    content: string;
};

export interface SectionImage extends SectionText {
    imageUrl: string;
};

export interface SectionHeader extends Section {
    logo: string;
    content?: string;
    navigationLinks: { label: string; href: string }[];
};

export interface SectionFooter extends Section {
    logo: string;
    middleText: string;
    rightText: string;
};

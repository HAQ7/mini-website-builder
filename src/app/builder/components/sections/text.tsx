import { SectionText } from "../../types/sections";

export default function TextSection({ section }: { section: SectionText }) {
  const bgColor = section.bgColor || "#ffffff";
  const textColor = section.textColor || "#000000";
  
  return (
    <section 
      className="w-full py-16 px-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: textColor }}
        >
          {(section as any).title || "Section Title"}
        </h2>
        <div 
          className="text-lg leading-relaxed space-y-4"
          style={{ color: textColor }}
        >
          {((section as any).content || "Section content goes here...")
            .split("\n")
            .map((paragraph: string, index: number) =>
              paragraph.trim() ? (
                <p key={index}>{paragraph}</p>
              ) : (
                <br key={index} />
              )
            )}
        </div>
      </div>
    </section>
  );
}

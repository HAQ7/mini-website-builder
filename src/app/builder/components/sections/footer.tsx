import { SectionFooter } from "../../types/sections";

export default function FooterSection({ section }: { section: SectionFooter }) {
  const bgColor = section.bgColor || "#111827";
  const textColor = section.textColor || "#ffffff";
  
  return (
    <footer 
      className="w-full py-16 px-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-4xl mx-auto text-center flex justify-around">
        <div className="flex items-center">
            {section.logo ? (
              <img 
                src={section.logo} 
                alt="Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div 
                className="h-10 w-20 rounded flex items-center justify-center text-xs"
                style={{ 
                  backgroundColor: textColor === "#ffffff" ? "#374151" : "#e5e7eb",
                  color: textColor === "#ffffff" ? "#9ca3af" : "#6b7280"
                }}
              >
                Logo
              </div>
            )}
          </div>

        <div 
          className="leading-relaxed space-y-4"
          style={{ color: textColor }}
        >
          {((section as any).middleText || "Footer content goes here...")
            .split("\n")
            .map((paragraph: string, index: number) =>
              paragraph.trim() ? (
                <p key={index}>{paragraph}</p>
              ) : (
                <br key={index} />
              )
            )}
        </div>
        <p 
          className="text-sm opacity-80"
          style={{ color: textColor }}
        >
          {section.rightText}
        </p>
      </div>
    </footer>
  );
}

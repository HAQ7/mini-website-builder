import { SectionImage } from "../../types/sections";

export default function ImageSection({ section }: { section: SectionImage }) {
  const bgColor = section.bgColor || "#f9fafb";
  const textColor = section.textColor || "#111827";
  
  return (
    <section 
      className="w-full py-16 px-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: textColor }}
            >
              {(section as any).title || "Image Section Title"}
            </h2>
            <div 
              className="text-lg leading-relaxed space-y-4"
              style={{ color: textColor }}
            >
              {(
                (section as any).content || "Image section content goes here..."
              )
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
          <div className="order-first md:order-last">
            {(section as any).imageUrl ? (
              <img
                src={(section as any).imageUrl}
                alt={(section as any).title || "Section image"}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="w-full h-64 md:h-80 rounded-lg shadow-lg flex items-center justify-center"
              style={{ 
                display: (section as any).imageUrl ? "none" : "flex",
                backgroundColor: textColor === "#111827" ? "#e5e7eb" : "#374151"
              }}
            >
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: textColor === "#111827" ? "#9ca3af" : "#6b7280" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p 
                  className="text-sm"
                  style={{ color: textColor === "#111827" ? "#6b7280" : "#9ca3af" }}
                >
                  Image placeholder
                </p>
                <p 
                  className="text-xs mt-1"
                  style={{ color: textColor === "#111827" ? "#6b7280" : "#9ca3af" }}
                >
                  Add an image URL to display here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

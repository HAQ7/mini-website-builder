import { SectionHeader } from "../../types/sections";

export default function HeaderSection({ section }: { section: SectionHeader }) {
  const bgColor = section.bgColor || "#1f2937";
  const textColor = section.textColor || "#ffffff";
  
  return (
    <header 
      className="w-full py-4 px-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            {section.navigationLinks?.map((link, index) => (
              <a
                key={index}
                href={link.href || '#'}
                className="transition-colors duration-200 text-sm font-medium hover:opacity-80"
                style={{ color: textColor }}
              >
                {link.label || `Link ${index + 1}`}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

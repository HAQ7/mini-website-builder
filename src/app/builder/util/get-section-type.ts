import { SectionType } from "../store/section-context";

export function getSectionType(
  section: SectionType
): "header" | "text" | "image" | "footer" {
  if ("imageUrl" in section) return "image";
  if ("title" in section && "content" in section) return "text";
  if ("navigationLinks" in section) return "header";
  return "footer";
}
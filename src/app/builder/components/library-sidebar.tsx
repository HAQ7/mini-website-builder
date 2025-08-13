import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import SectionPicker from "./section-picker";
import SectionsList from "./sections-list";
import { ExportButton } from "./ExportButton";
import { ImportButton } from "./ImportButton";

export function LibrarySidebar() {
  return (
    <Sidebar variant={"floating"}>
      <SidebarHeader className="font-bold text-white text-xl grid grid-cols-2 p-4">
        <span>Section Library</span>
        <div className="flex gap-2 justify-end">
          <ExportButton />
          <ImportButton />
        </div>
      </SidebarHeader>
      <SidebarContent className="p-0">
        {/* Sections List */}
        <SectionsList />

        <Separator className="border my-2" />

        {/* Section Picker */}
        <div className="p-2">
          <SectionPicker />
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

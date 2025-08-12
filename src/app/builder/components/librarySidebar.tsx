import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function LibrarySidebar() {
  return (
    <Sidebar variant={"floating"}>
      <SidebarHeader className="font-bold p-2 text-white text-xl">
        Section Library 
      </SidebarHeader>
      <SidebarContent className="p-2">
        <button className="w-full p-4 text-[#949494] border border-dashed border-[#949494] rounded-lg hover:bg-[#303030] hover:text-white transition-colors cursor-pointer">
          Add Section
        </button>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

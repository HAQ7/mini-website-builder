import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import SectionPicker from "./section-picker";
import SectionsList from "./sections-list";

export function LibrarySidebar() {
    return (
        <Sidebar variant={"floating"}>
            <SidebarHeader className="font-bold p-2 text-white text-xl">
                Section Library
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

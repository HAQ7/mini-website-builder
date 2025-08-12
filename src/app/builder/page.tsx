import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LibrarySidebar } from "./components/librarySidebar";
import { MenuIcon } from "lucide-react";

export default function BuilderPage() {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex sm:flex-row flex-col-reverse h-screen">
        <LibrarySidebar />
        <div>
          <SidebarTrigger className="cursor-pointer" />
          <div>asdasdads</div>
        </div>
      </div>
    </SidebarProvider>
  );
}

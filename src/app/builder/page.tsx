import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { LibrarySidebar } from "./components/library-sidebar";
import { SectionProvider } from "./store/section-context";
import { LivePreview } from "./components/live-preview";
import logo from "@/app/icon.svg";
import Link from "next/link";

export default function BuilderPage() {
  return (
    <SectionProvider>
      <SidebarProvider defaultOpen>
        <div className="flex flex-row w-screen">
          <LibrarySidebar />

          <div className="flex flex-col flex-1 items-center">
            <div className="flex justify-between w-full items-center">
              <SidebarTrigger className="cursor-pointer text-foreground size20" />
              <Link href="/">
                <Image src={logo} alt="Logo" className="size-10" />
              </Link>
            </div>
            <div className="flex justify-center min-h-screen p-4 w-full max-w-4xl">
              {/* Preview Area */}

              <LivePreview />
            </div>
          </div>
          <div></div>
        </div>
      </SidebarProvider>
    </SectionProvider>
  );
}

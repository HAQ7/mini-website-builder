"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useSections } from "../store/section-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SectionPicker() {
    const { addSection } = useSections();
    const [open, setOpen] = useState(false);

    const handleSectionSelect = (
        sectionType: "header" | "text" | "image" | "footer"
    ) => {
        addSection(sectionType);
        setOpen(false); // Close the dialog after selecting a section
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="w-full p-4 text-[#949494] border border-dashed border-[#949494] rounded-lg hover:bg-[#303030] hover:text-white transition-colors cursor-pointer">
                Add Section
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Section</DialogTitle>
                    <DialogDescription>
                        Select a section from the library to add to your page.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-wrap gap-2">
                    <Button
                        type="button"
                        variant={"secondary"}
                        onClick={() => {
                            handleSectionSelect("header");
                        }}
                    >
                        Header
                    </Button>
                    <Button
                        type="button"
                        variant={"secondary"}
                        onClick={() => handleSectionSelect("image")}
                    >
                        Section with Image
                    </Button>
                    <Button
                        type="button"
                        variant={"secondary"}
                        onClick={() => handleSectionSelect("text")}
                    >
                        Section with Text
                    </Button>
                    <Button
                        type="button"
                        variant={"secondary"}
                        onClick={() => handleSectionSelect("footer")}
                    >
                        Footer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

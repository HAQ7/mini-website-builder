import { PlusCircleIcon, UploadIcon } from "lucide-react";

export default function DesignModel() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Design Model Component</h1>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-2 p-6">
        <button className="bg-white text-black w-screen max-w-32 aspect-square rounded-xl cursor-pointer transition-colors hover:bg-[#f3f3f3] flex flex-col justify-center gap-2">
          <UploadIcon className="w-6 h-6 mx-auto" />
          Import Design
        </button>
        <button className="bg-black border border-[#c5c5c5] text-white w-screen max-w-32 aspect-square rounded-xl cursor-pointer transition-colors hover:bg-[#202020] flex flex-col justify-center gap-2">
          <PlusCircleIcon className="w-6 h-6 mx-auto" />
          New Design
        </button>
      </div>
    </div>
  );
}
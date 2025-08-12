import Aurora from "@/components/backgrounds/Aurora";
import Header from "@/app/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid place-items-center min-h-screen">
      <Header />
        <Aurora colorStops={["#fff", "#000", "#fff"]} />
        <div className="flex flex-col items-center justify-center text-center gap-5 z-10">
          <h1 className="text-4xl font-bold">Mini Web Builder</h1>
          <p className="text-lg">
            A simple web builder for creating static websites.
          </p>
          <Link href="/builder" className="bg-white text-black py-3 px-4 rounded-4xl hover:bg-[#f3f3f3] transition-colors" >Get Started</Link>
        </div>
      </main>
    </>
  );
}

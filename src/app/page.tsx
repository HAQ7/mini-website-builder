"use client"

import Aurora from "@/components/backgrounds/Aurora";
import Header from "@/app/components/Header";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <main className="grid place-items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid place-items-center fixed top-0 left-0 right-0 z-50"
        >
          <Header />
        </motion.div>
        <Aurora colorStops={["#fff", "#000", "#fff"]} />
        <motion.div 
          className="flex flex-col items-center justify-center text-center gap-5 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h1 
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Mini Web Builder
          </motion.h1>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            A simple web builder for creating static websites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/builder"
              className="bg-white text-black py-3 px-4 rounded-4xl hover:bg-[#f3f3f3] transition-colors inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}

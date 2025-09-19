"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react"; // ou Heroicons si tu veux
import { KeyboardEvent } from "react";
import Link from "next/link";
import { useModal } from "./animated-modal";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
            "flex justify-between items-center w-full max-w-7xl px-6 py-2  top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full shadow z-[5000]",
            className
          )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo/HouSetimation2.webp" alt="HouSetimation" width={150} height={80}/>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 ">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 hover:bg-slate-300 bg-white dark:bg-black py-2 px-4 rounded-full text-neutral-600 dark:hover:text-neutral-300 hover:text-black"
              )}
              scroll={true}
            >
              <span className="block sm:hidden ">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <Link href="#Footer">
            <button className="bg-white dark:bg-black hover:bg-slate-300 text-sm font-medium relative text-neutral-600 hover:text-black dark:text-white px-4 py-2 rounded-full">
              <span>Contact</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </button>
          </Link>
          {/* Search Button */}
          <button className="flex items-center gap-2 w-24 md:w-32 transform rounded-full bg-gradient-to-r from-teal-900 to-green-300 0 px-5 py-2 text-sm md:text-base font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:from-white dark:to-gray-300 dark:text-black">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
            <input type="textarea" placeholder="Rechercher" className="w-15" onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                alert("Recherche...");
              }
            }}/>
          </button>
        </div>
      </motion.div>

    </AnimatePresence>
  );
};

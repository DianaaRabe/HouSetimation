"use client"

import HeroSectionOne from "@/components/hero-section-demo-1";
import { WorldMapDemo } from "@/components/word-map-demo";
import { BentoGridThirdDemo } from "@/components/bento-grid-demo";
import { CometCardDemo } from "@/components/comet-card-demo";
import { ServicesTexts } from "@/components/services-text";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <HeroSectionOne/>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        id="About"
        className="text-center text-4xl font-medium text-transparent md:text-7xl overflow-x-hidden"
      >
        <p className=" text-center font-bold text-xl md:text-4xl text-white p-5 mb-10">
          A propos
        </p>
      </motion.div>
      <BentoGridThirdDemo/>
      <br />
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        id="Services"
        className="text-center text-4xl font-medium text-transparent md:text-7xl overflow-x-hidden"
      >
        <p className=" text-center font-bold text-xl md:text-4xl text-white p-5 mt-2">
          Nos Services
        </p>
      </motion.div>
      <div className="flex justify-center">
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 max-w-7xl">
          <div className="ml-10 lg:ml-25">
            <CometCardDemo/>
          </div>
          <div className="ml-10 lg:ml-0">
            <ServicesTexts/>
          </div>
        </div>
      </div>

      <WorldMapDemo/>
    </div>
  );
}

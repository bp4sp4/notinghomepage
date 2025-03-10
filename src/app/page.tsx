"use client";

import SectionIntro from "./components/SectionIntro";
import SectionText from "./components/SectionText";
import { WobbleCardDemo } from "./components/SectionShape";
import Footer from "./components/Footer";
import FileTreeComponents from "./components/FileTree";
import ConfettiFireworks from "@/components/magicui/confetti";
import { motion, useSpring, useScroll } from "motion/react";
import { GoogleGeminiEffectDemo } from "./components/TextGenration";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 999,
          backgroundColor: "#ff0088",
        }}
      />
      <SectionIntro />
      <FileTreeComponents />
      <SectionText />
      <GoogleGeminiEffectDemo />
      <WobbleCardDemo />

      <div className="relative h-screen  flex h-[500px] w-full items-center justify-center overflow-hidden   bg-black text-white">
        <ConfettiFireworks />
      </div>
      <Footer />
    </>
  );
}

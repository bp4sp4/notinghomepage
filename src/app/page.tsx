"use client";

import SectionIntro from "./components/SectionIntro";
import SectionGallery from "./components/SectionGallery";
import SectionText from "./components/SectionText";
import SectionShape from "./components/SectionShape";
import SectionGsap from "./components/SectionGsap";
import Footer from "./components/Footer";
import { motion, useSpring, useScroll } from "motion/react";
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
          backgroundColor: "#ff0088",
        }}
      />
      <SectionIntro />
      <SectionGallery />
      <SectionText />
      <SectionShape />
      <SectionGsap />
      <Footer />
    </>
  );
}

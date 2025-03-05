"use client";

import SectionIntro from "./components/SectionIntro";
import SectionGallery from "./components/SectionGallery";
import SectionText from "./components/SectionText";
import SectionShape from "./components/SectionShape";

import Footer from "./components/Footer";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/magicui/terminal";
import ConfettiFireworks from "@/components/magicui/confetti";
import FlipText from "@/components/magicui/flip-text";
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
          zIndex: 999,
          backgroundColor: "#ff0088",
        }}
      />
      <SectionIntro />
      <SectionGallery />
      <SectionText />
      <SectionShape />

      <FlipText className="text-2xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">
        어떤 아이디어가 있을까 고민했지만, 사실 특별한 것은 떠오르지 않았어요.
        그럼에도 다양한 것들을 해봤고, GSAP SplitText를 사용하려면 멤버십이
        필요해서, Magic UI GSAP SplitText 처럼 나타나게 했어요.
      </FlipText>

      <Terminal>
        <TypingAnimation>&gt; sanghunpage nothings &nbsp;</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ 아무것도 없는거 체크.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ next.js 사용 체크.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Tailwind CSS 사용체크.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ gsap 진짜 쓰기 어려운거 확인.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ magic ui도 이거 임포트해오는거 1시간 삽질한거 체크.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ motion.js 쓰기 쉬움 체크.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Tailwind CSS 조금 더 공부 필요</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ 뭐라도 더 하자 뭐라도 더 만들자</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ 한두개만 더 넣어볼까? .</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ magic ui update 3 file:</span>
          <span className="pl-2">- terminal.tsx,</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          &nbsp; Project nothings completed.
        </TypingAnimation>
      </Terminal>
      <div className="relative h-screen  flex h-[500px] w-full items-center justify-center overflow-hidden   bg-black text-white">
        <ConfettiFireworks />
      </div>
      <Footer />
    </>
  );
}

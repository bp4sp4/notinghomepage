import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";

export default function GsapText() {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    // 텍스트 플러그인으로 텍스트 애니메이션 설정
    if (quoteRef.current) {
      const tl = gsap.timeline();
      tl.from(quoteRef.current, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      });
    }
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl mx-2 quote"
        ref={quoteRef}
      >
        SplitText makes it easy to break apart the text in an HTML element so
        that each character, word, and/or line is wrapped in its own div tag.
      </motion.div>
    </section>
  );
}

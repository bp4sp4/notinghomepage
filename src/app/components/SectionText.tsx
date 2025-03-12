"use client";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";

export default function SectionIntro() {
  const words = ["창의적인", "혁신적인", "동적인", "미래적인"];

  return (
    <>
      <div className="bg-black">
        <section className="h-screen flex justify-center items-center flex-col text-white intro__wrap px-4 sm:px-8 md:px-12">
          <motion.div className="text-xl sm:text-4xl md:text-5xl lg:text-4xl">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-shadow-lg"
            >
              <h1>
                만들어봤어요"{" "}
                <FlipWords className="text-black bg-white" words={words} /> "
                <br />
                당신의 UI 경험을 한 단계 더 향상시켜 줄
              </h1>
            </motion.span>
          </motion.div>
        </section>
      </div>
    </>
  );
}

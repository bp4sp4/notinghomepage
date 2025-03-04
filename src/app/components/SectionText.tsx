"use client";
import { motion } from "framer-motion";

export default function SectionText() {
  const text = "위에 스크롤에 맞춰서 지나가는거 보이시죠?".split(" ");

  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      {text.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 1 }}
          className="text-4xl mx-2"
        >
          {word}
        </motion.span>
      ))}
    </section>
  );
}

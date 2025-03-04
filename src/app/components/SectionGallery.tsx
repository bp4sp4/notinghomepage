"use client";
import { motion } from "framer-motion";

const text = "저 그래도 뭐라도 있어 보여야 해서 motion.js 썼어요..".split(" ");

export default function SectionGallery() {
  return (
    <section className="h-screen flex grid grid-cols-3 gap-4 p-20 bg-white">
      <motion.div className="text-5xl font-extrabold text-center flex flex-wrap justify-center">
        {text.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 1 }}
            className="mx-2 text-shadow-lg"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {Array(8)
        .fill("")
        .map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="h-64 bg-gray-200"
          />
        ))}
    </section>
  );
}

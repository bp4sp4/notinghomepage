"use client";
import { motion } from "framer-motion";

export default function SectionIntro() {
  const text = "여기, 아무것도 없어요.".split(" ");
  const text2 = "아이디어가 부족해서, 디자인을 잔뜩 넣어봤어요..".split(" ");

  return (
    <section className="h-screen flex items-center justify-center flex-col bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white">
      {/* 첫 번째 문구 */}
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

      {/* 두 번째 문구 */}
      <motion.div className="mt-10 text-4xl flex flex-wrap justify-center">
        {text2.map((word, index) => (
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
    </section>
  );
}

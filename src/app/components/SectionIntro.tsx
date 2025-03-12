"use client";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";

export default function SectionIntro() {
  return (
    <>
      <div className="bg-black">
        <h1 className="header text-white">nothings.</h1>
        <section className="h-screen flex justify-center items-center flex-col text-white intro__wrap">
          <motion.div className="text-xl md:text-4xl lg:text-5xl">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-shadow-lg"
            >
              <h1 className="px-4 md:px-0">
                안녕하세요! <br /> 새로운 경험을 위해 <Cover>디자인을</Cover>{" "}
                <br />
                준비했어요.
              </h1>
            </motion.span>
          </motion.div>
        </section>
      </div>
    </>
  );
}

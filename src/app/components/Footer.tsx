"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      whileHover={{ backgroundColor: "#ff0088", color: "white" }}
      className="h-40 flex items-center justify-center bg-white text-black cursor-pointer"
    >
      nothing matters.
    </motion.footer>
  );
}

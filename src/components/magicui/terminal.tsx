"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {children}
    </motion.span>
  );
}

const text = "있어보이게 Magic UI도 넣고?".split(" ");

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText((prev) => prev + children[i]);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <motion.span
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </motion.span>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center mt-6">
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
      </div>
      <section className="flex items-center flex-col justify-center mt-12 mb-12">
        <div
          className={cn(
            "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background",
            className
          )}
        >
          <div className="flex flex-col gap-y-2 border-b border-border p-4">
            <div className="flex flex-row gap-x-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          <pre className="p-4">
            <code className="grid gap-y-1 overflow-auto">{children}</code>
          </pre>
        </div>
      </section>
    </>
  );
};

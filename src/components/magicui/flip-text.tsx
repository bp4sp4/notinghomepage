"use client";

import { AnimatePresence, motion, Variants, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React, { useState, useEffect, useRef } from "react";

interface FlipTextProps extends MotionProps {
  /** The duration of the animation */
  duration?: number;
  /** The delay between each character */
  delayMultiple?: number;
  /** The variants of the animation */
  framerProps?: Variants;
  /** The class name of the component */
  className?: string;
  /** The element type of the component */
  as?: ElementType;
  /** The children of the component */
  children: React.ReactNode;
  /** The variants of the animation */
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export default function FlipText({
  children,
  duration = 0.2, // 더 빠르게 설정
  delayMultiple = 0.04, // 문자가 빨리 나오도록 조정
  className,
  as: Component = "span",
  variants,
  ...props
}: FlipTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 50% 이상 보일 때 애니메이션 시작
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const MotionComponent = motion(Component); // 수정된 부분
  const characters = React.Children.toArray(children).join("").split("");

  return (
    <div
      ref={textRef}
      className="flex h-screen bg-black justify-center items-center flex-wrap split-text"
    >
      <AnimatePresence mode="wait">
        {isVisible &&
          characters.map((char, i) => (
            <MotionComponent
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants || defaultVariants}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("origin-center drop-shadow-sm", className)}
              {...props}
            >
              {char}
            </MotionComponent>
          ))}
      </AnimatePresence>
    </div>
  );
}

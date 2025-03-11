"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function AuroraBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center">
        감각적인 배경을 직접 경험해보세요
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        부드럽게 흐르는 애니메이션과 함께 새로운 UI를 만나보세요
      </p>
    </WavyBackground>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <section className="">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full m-12">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Next.js With Aceternity UI
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Next.js를 사용하여 빠르고 효율적인 웹 애플리케이션을 구축했고,
              Aceternity UI 라이브러리로 스타일을 더해 더 나은 사용자 경험을
              제공하고 있습니다. 특히 빠른 페이지 로딩과 유연한 디자인이 큰
              장점입니다.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Next.js With Magic UI
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Magic UI를 사용하여 미세한 디자인 조정이 가능해, 사용자가 원하는
            스타일을 쉽게 구현할 수 있었습니다. 특히 다크 모드와 같은 유연한
            테마 시스템 덕분에, 다양한 디자인 요구에 맞춰 변경이 가능해졌습니다.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              ALL Contents
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Next.js와 함께 프로젝트를 시작하고, Aceternity UI와 Magic UI를
              사용하여 빠르게 반응하는 웹 애플리케이션을 구축할 수 있었습니다.
              이러한 툴들은 빠른 개발과 유지보수를 가능하게 하여 개발자의 시간을
              절약해주고, 효율적인 작업을 도와줍니다.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
}

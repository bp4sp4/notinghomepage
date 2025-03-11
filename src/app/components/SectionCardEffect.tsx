"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <section className="bg-black h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 bg-black">
        <h1 className="max-w-5xl font-extrabold text-white text-center">
          호버로 색다른 경험을 느껴보세요
        </h1>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Next.js",
    description:
      "React 기반의 최신 웹 애플리케이션을 쉽게 개발할 수 있도록 돕는 프레임워크입니다.",
    link: "https://nextjs.org",
  },
  {
    title: "Aceternity",
    description:
      "웹 애니메이션과 인터랙티브 UI 효과를 구현하는 강력한 라이브러리입니다.",
    link: "https://aceternity.dev",
  },
  {
    title: "Magic UI",
    description:
      "직관적인 인터페이스와 부드러운 애니메이션을 제공하는 UI 컴포넌트 라이브러리입니다.",
    link: "https://magicui.design",
  },

  {
    title: "React",
    description:
      "사용자 인터페이스를 구축하기 위한 선언적이고 효율적인 JavaScript 라이브러리입니다.",
    link: "https://react.dev",
  },
  {
    title: "HTML5",
    description:
      "최신 웹 표준을 지원하는 마크업 언어로, 멀티미디어와 다양한 기능을 제공합니다.",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    title: "CSS3",
    description:
      "웹 페이지의 스타일과 레이아웃을 디자인할 수 있는 최신 CSS 표준입니다.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
  },
];

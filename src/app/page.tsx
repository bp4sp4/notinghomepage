"use client";

import SectionIntro from "./components/SectionIntro";
import SectionText from "./components/SectionText";
import SectionShape from "./components/SectionShape";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  RocketIcon,
  ChatBubbleIcon,
  BellIcon,
  CalendarIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import Footer from "./components/Footer";
import FileTreeComponents from "./components/FileTree";
import ConfettiFireworks from "@/components/magicui/confetti";
import FlipText from "@/components/magicui/flip-text";
import { motion, useSpring, useScroll } from "motion/react";

export default function Home() {
  const text = "맞아요 사실 Next.JS랑 친해지는중이에요.".split(" ");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 999,
          backgroundColor: "#ff0088",
        }}
      />
      <SectionIntro />
      <FileTreeComponents />
      <SectionText />
      <SectionShape />

      <FlipText className="text-2xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">
        어떤 아이디어가 있을까 고민했지만, 사실 특별한 것은 떠오르지 않았어요.
        그럼에도 다양한 것들을 해봤고, GSAP SplitText를 사용하려면 멤버십이
        필요해서, Magic UI를 사용해서 GSAP SplitText 처럼 나타나게 했어요.
      </FlipText>
      <div className="container mx-auto py-12 grid__wrap">
        {text.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 1 }}
            className="text-4xl mx-2 "
          >
            {word}
          </motion.span>
        ))}
        <BentoGrid className="mt-6">
          {/* 첫 번째 줄 */}
          <BentoCard
            name="실시간 채팅"
            description="생각보다 임포트 어렵네."
            href="/chat"
            cta="채팅 시작하기"
            Icon={ChatBubbleIcon}
            className="col-span-1 md:col-span-1"
            background={<div className="bg-blue-500 h-full w-full" />}
          />
          <BentoCard
            name="로켓 배송"
            description="왜이렇게 까다로워"
            href="/delivery"
            cta="배송 알아보기"
            Icon={RocketIcon}
            className="col-span-2 md:col-span-2"
            background={<div className="bg-red-500 h-full w-full" />}
          />

          {/* 두 번째 줄 */}
          <BentoCard
            name="AI 추천"
            description="헤더하나 만들까..너무 성의없는데"
            href="/ai-recommend"
            cta="추천 보기"
            Icon={BellIcon}
            className="col-span-1 md:col-span-3"
            background={<div className="bg-green-500 h-full w-full" />}
          />
          <BentoCard
            name="프로모션 이벤트"
            description="이딴걸 포트폴리오에 넣어도되나..."
            href="/promotion"
            cta="이벤트 참여"
            Icon={CalendarIcon}
            className="col-span-3 md:col-span-2"
            background={<div className="bg-yellow-500 h-full w-full" />}
          />

          {/* 세 번째 줄 */}
          <BentoCard
            name="사용자 후기"
            description="더 넣으면 홈페이지 렉걸릴꺼같은데..."
            href="/reviews"
            cta="후기 보기"
            Icon={Share2Icon}
            className="col-span-3 md:col-span-1"
            background={<div className="bg-purple-500 h-full w-full" />}
          />
        </BentoGrid>
      </div>

      <div className="relative h-screen  flex h-[500px] w-full items-center justify-center overflow-hidden   bg-black text-white">
        <ConfettiFireworks />
      </div>
      <Footer />
    </>
  );
}

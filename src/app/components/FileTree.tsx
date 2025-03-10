"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function FileTreeComponents() {
  return (
    <section className=" flex items-center bg-white flex-col justify-center">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black text-black">
                스크롤에 마법을 더하다 <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  동적인 경험을
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/globe.svg`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

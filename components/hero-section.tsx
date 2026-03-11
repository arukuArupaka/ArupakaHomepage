"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ItemDef = {
  id: string;
  src: string;
  alt: string;
  left: string;
  top: string;
  exitX: number;
  exitY: number;
  rotate: number;
  size: number;
};

const ITEMS: ItemDef[] = [
  { id: "c", src: "/images/c.svg", alt: "C", left: "8%", top: "16%", exitX: -260, exitY: -220, rotate: -10, size: 94 },
  { id: "figma", src: "/images/figma.svg", alt: "Figma", left: "94%", top: "16%", exitX: 280, exitY: -220, rotate: 11, size: 92 },
  { id: "python", src: "/images/python.svg", alt: "Python", left: "8%", top: "66%", exitX: -300, exitY: 190, rotate: -8, size: 116 },
  { id: "next", src: "/images/next.svg", alt: "Next.js", left: "93%", top: "68%", exitX: 300, exitY: 220, rotate: 8, size: 98 },
  { id: "typescript", src: "/images/typescript.svg", alt: "TypeScript", left: "12%", top: "40%", exitX: -220, exitY: -60, rotate: 7, size: 108 },
  { id: "javascript", src: "/images/javascript.svg", alt: "JavaScript", left: "88%", top: "40%", exitX: 200, exitY: -90, rotate: -9, size: 108 },
  { id: "git", src: "/images/git.svg", alt: "Git", left: "47%", top: "87%", exitX: 0, exitY: 260, rotate: 0, size: 120 },
];

function FloatingItem({
  item,
  scrollYProgress,
}: {
  item: ItemDef;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const x = useTransform(scrollYProgress, [0, 0.5], [0, item.exitX]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, item.exitY]);
  const opacity = useTransform(scrollYProgress, [0, 0.32, 0.5], [1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [item.rotate, item.rotate + (item.exitX >= 0 ? 16 : -16)]);

  return (
    <div
      className="pointer-events-none absolute z-0"
      style={{ left: item.left, top: item.top, transform: "translate(-50%, -50%)" }}
    >
      <motion.div style={{ x, y, opacity, rotate }}>
        <Image
          src={item.src}
          alt={item.alt}
          width={item.size}
          height={item.size}
          priority
          className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        />
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06]);

  return (
    <div
      ref={sectionRef}
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #ffffff 0%, #f7f7f7 40%, #f0f0f0 70%, #ebebeb 100%)",
      }}
    >
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0">
          {ITEMS.map((item) => (
            <FloatingItem key={item.id} item={item} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        <div className="relative z-10 -mt-[5vh] flex flex-col items-center text-center">
          <h1 className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.9] tracking-tighter text-gray-900">はしるアルパカ</h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-gray-500 md:text-lg">
            つくりたいを、カタチに。
            <br />
            ここは、学生がアプリをつくる場所。
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <motion.div style={{ y: logoY, scale: logoScale }} className="relative z-10 mx-auto -mt-72 w-full max-w-5xl">
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-7">
              {ITEMS.map((item) => (
                <div
                  key={`grid-${item.id}`}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white p-3"
                >
                  <Image src={item.src} alt={item.alt} width={44} height={44} />
                  <span className="text-xs font-medium text-gray-600">{item.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

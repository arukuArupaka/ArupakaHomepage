"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RELEASE_HREF: string | null = null;
const RELEASE_DATE = new Date("2026-04-05T00:00:00+09:00");

function getDaysRemaining() {
  const now = new Date();
  const diff = RELEASE_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function ReleaseCardContent() {
  const [daysRemaining, setDaysRemaining] = useState(() => getDaysRemaining());

  useEffect(() => {
    setDaysRemaining(getDaysRemaining());
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)] sm:p-7">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(104,192,255,0.12),rgba(255,184,104,0.12))]" />
      <div className="relative grid items-center gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8">
        <div className="mx-auto w-full max-w-[220px]">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/arukuArupaka.png"
              alt="歩くアルパカアプリ"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 220px, 220px"
              priority
            />
          </div>
        </div>

        <div className="relative text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <div className="inline-flex items-center rounded-full bg-[#68C0FF] px-3 py-1 text-xs font-bold tracking-[0.16em] text-white">
              UPCOMING
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              歩くアルパカアプリ
              <br />
              近日リリース予定
            </h2>
            <div className="inline-flex items-center justify-center gap-3 self-center rounded-full border border-[#FFD7A8] bg-[linear-gradient(135deg,#FFF8EF,#FFE3BF)] px-5 py-3 shadow-[0_12px_28px_rgba(255,184,104,0.22)] md:self-auto">
              <span className="text-sm font-semibold text-slate-600">残り</span>
              <span className="text-5xl font-black leading-none text-[#F08A00] sm:text-6xl">
                {daysRemaining}
              </span>
              <span className="text-base font-semibold text-slate-700">日</span>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            現在公開準備中です。2026年4月5日公開予定です。リリース後はこのボックスからアプリページへ直接移動できるようにします。
          </p>
          <div className="mt-5 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700">
            {RELEASE_HREF ? "アプリページへ移動" : "リリース準備中"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReleaseBox() {
  if (RELEASE_HREF) {
    return (
      <Link href={RELEASE_HREF} className="block">
        <ReleaseCardContent />
      </Link>
    );
  }

  return <ReleaseCardContent />;
}

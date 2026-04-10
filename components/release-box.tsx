"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RELEASE_HREF =
  "https://apps.apple.com/jp/app/%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%B4%BB%E6%94%AF%E6%8F%B4%E3%82%A2%E3%83%97%E3%83%AAfor%E7%AB%8B%E5%91%BD%E9%A4%A8-%E6%AD%A9%E3%81%8F%E3%82%A2%E3%83%AB%E3%83%91%E3%82%AB-r/id6499567971";

function ReleaseCardContent() {
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
              AVAILABLE NOW
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              歩くアルパカ+R
              <br />
              App Storeで公開中
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            App Storeで公開中です。このボックスを押すと、歩くアルパカアプリのページへ直接移動できます。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#F59E0B,#FB7185)] px-5 py-3 text-sm font-black text-white shadow-[0_16px_32px_rgba(245,158,11,0.28)] transition-transform duration-300 group-hover:translate-x-1">
            今すぐダウンロード！
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReleaseBox() {
  return (
    <Link
      href={RELEASE_HREF}
      className="block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ReleaseCardContent />
    </Link>
  );
}

"use client";
import Script from "next/script";
import { useState } from "react";
import { useFadeUp } from "@/hooks/use-fade-up";
import { newsData } from "@/lib/news-data";

const INSTAGRAM_POST_URL = "https://www.instagram.com/p/DVlN6MKj0eB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
const ITEMS_PER_PAGE = 5;

function toInstagramPermalink(postUrl: string) {
  try {
    const url = new URL(postUrl);
    const normalizedPath = url.pathname.endsWith("/")
      ? url.pathname
      : `${url.pathname}/`;
    return `${url.origin}${normalizedPath}`;
  } catch {
    return postUrl;
  }
}

export default function NewsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeUp();
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp();
  const { ref: imageRef, isVisible: imageVisible } = useFadeUp();
  const [page, setPage] = useState(0);
  const instagramPermalink = toInstagramPermalink(INSTAGRAM_POST_URL);
  const latestFirstNews = [...newsData].reverse();
  const totalPages = Math.ceil(latestFirstNews.length / ITEMS_PER_PAGE);
  const currentItems = latestFirstNews.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] gap-10 lg:gap-16 items-center">
          <div
            ref={contentRef}
            className={`max-w-2xl space-y-6 transition-all duration-1000 transform ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              ref={titleRef}
              className={`text-4xl font-bold text-slate-900 transition-all duration-1000 transform ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              最新情報
            </h2>
            <div className="space-y-4">
              {currentItems.map((item) => (
                <article
                  key={`${item.date}-${item.title}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 inline-block">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold">
                      NEWS
                    </span>
                  </div>
                  <p className="text-slate-900 text-sm font-medium">{item.date}</p>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-slate-900">
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(current - 1, 0))}
                disabled={page === 0}
                aria-label="前のページへ"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-50"
              >
                {"<"}
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  aria-label={`${pageNumber + 1}ページ目へ`}
                  aria-current={page === pageNumber ? "page" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition ${
                    page === pageNumber
                      ? "border-cyan-400 bg-cyan-500 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {pageNumber + 1}
                </button>
              ))}
              <button
                type="button"
                onClick={() =>
                  setPage((current) => Math.min(current + 1, totalPages - 1))
                }
                disabled={page === totalPages - 1}
                aria-label="次のページへ"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-50"
              >
                {">"}
              </button>
            </div>
          </div>
          <div
            ref={imageRef}
            className={`relative w-full max-w-[460px] lg:justify-self-end min-h-[560px] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-1000 transform ${
              imageVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex w-full h-full justify-center rounded-3xl overflow-hidden p-3">
              <blockquote
                className="instagram-media !m-0 w-full !max-w-[400px]"
                data-instgrm-captioned
                data-instgrm-permalink={instagramPermalink}
                data-instgrm-version="14"
              >
                <a
                  href={instagramPermalink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline"
                >
                  Instagramで投稿を見る
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          const instagram = (window as Window & {
            instgrm?: { Embeds?: { process?: () => void } };
          }).instgrm;
          instagram?.Embeds?.process?.();
        }}
      />
    </section>
  );

}

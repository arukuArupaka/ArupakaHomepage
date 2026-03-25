"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
       {/* タイトル */}
<header className="text-center mb-16">
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl font-bold tracking-tight text-slate-900"
  >
    企業向けご案内
  </motion.h1>

  <p className="mt-2 text-lg text-gray-600">
    Corporate
  </p>

  <p className="mt-6 text-gray-500">
    はしるアルパカの業務委託サービスをご紹介します。
  </p>
</header>
        
        {/* 代表 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 bg-pink-50 border-l-4 border-pink-400 p-6 rounded shadow"
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-600">
            ご依頼方法
          </h2>

          <p className="mb-2 text-slate-800 text-lg">
            <span className="font-bold">Instagram DM：</span>
            @hashiru_arupaka
          </p>

          <p className="mb-2 text-slate-800 text-lg">
            <span className="font-bold">連絡先：</span>
            HashiruArupaka2025@gmail.com
          </p>
          
          <p className="mb-2 text-slate-800 text-lg">
            <span className="font-bold">担当者：</span>
            代表 林 泰聖
          </p>

          <a
            href="https://www.instagram.com/hashiru_arupaka?igsh=MXRlaDd3a2tyNThrbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors"
          >
            InstagramでDMを送る
          </a>
        </motion.section>

        {/* 学年構成 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 bg-blue-50 border-l-4 border-blue-400 p-6 rounded shadow"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            受託実績（抜粋）
          </h2>

          <ul className="space-y-1 text-slate-800">
            <li>立命館大学 — 株式会社クレオテックから美化運動促進アプリの依頼</li>
            <li>大阪万博 — 大阪府から2025年日本国際博覧会の依頼</li>
          </ul>
        </motion.section>

        {/* 学部学科構成 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded shadow"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-600">
            対応可能な業務例
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* 理工学部 */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-slate-700">
                イベント運営支援
              </h3>

              <ul className="space-y-1 text-slate-800">
                <li>企画設計</li>
                <li>当日運営</li>
                <li>運営マニュアル作成</li>
              </ul>
            </div>

            {/* その他 */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-slate-700">
                広報・コンテンツ制作
              </h3>

              <ul className="space-y-1 text-slate-800">
                <li>広報・SNS運用</li>
                <li>展示・コンテンツ制作</li>
                <li>企画構成・制作ディレクション</li>
              </ul>
            </div>

          </div>
        </motion.section>

      </div>
    </main>
  );
}

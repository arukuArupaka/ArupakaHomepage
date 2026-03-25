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

export default function JoinPage() {
  return (
    <main className="pt-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* タイトル（メンバー紹介と統一） */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold tracking-tight text-slate-900"
        >
          入部希望者向け
        </motion.h1>

        <p className="mt-2 text-lg text-gray-600">join</p>

        <p className="mt-6 text-gray-500">サークル情報はこちら</p>
      </header>

      {/* 紹介 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 p-10 rounded-3xl shadow-sm mb-24"
      >
        <p className="text-lg text-slate-700 mb-4">
          はしるアルパカでは、
          <span className="font-semibold text-slate-900">
            プログラミング未経験の方から経験者の方まで
          </span>
          幅広くメンバーを募集しています。
        </p>

        <p className="text-slate-700">
          「プログラミングを始めてみたい」 「アプリやWebサイトを作りたい」
          「仲間と一緒に成長したい」 そんな方を歓迎します。
        </p>
      </motion.section>

      {/* 活動内容 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-28"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">活動内容</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* カード1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-slate-200"
          >
            <div className="text-3xl mb-4">🚀</div>

            <h3 className="text-xl font-semibold mb-3">基礎学習</h3>

            <p className="text-slate-600">
              JavaScript / React などの基礎から学び、
              プログラミングの土台を身につけます。
            </p>
          </motion.div>

          {/* カード2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-slate-200"
          >
            <div className="text-3xl mb-4">💻</div>

            <h3 className="text-xl font-semibold mb-3">チーム開発</h3>

            <p className="text-slate-600">
              チームでアプリやWebサイトを制作し、 実践的な開発経験を積みます。
            </p>
          </motion.div>

          {/* カード3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-slate-200"
          >
            <div className="text-3xl mb-4">📚</div>

            <h3 className="text-xl font-semibold mb-3">勉強会・技術共有</h3>

            <p className="text-slate-600">
              定期的に勉強会を開催し、 メンバー同士で知識共有を行います。
            </p>
          </motion.div>

          {/* カード4 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-slate-200"
          >
            <div className="text-3xl mb-4">🏆</div>

            <h3 className="text-xl font-semibold mb-3">ハッカソン参加</h3>

            <p className="text-slate-600">
              ハッカソンやイベントに参加し、 実践的なスキルを磨きます。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 活動場所 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-28"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">活動場所</h2>

        <div className="bg-white border border-slate-200 p-12 rounded-3xl shadow-md text-center">
          <div className="text-3xl mb-4">📍</div>

          <p className="text-xl text-slate-700 font-medium">
            BKC バイオリンク1階 サークルルーム3
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-32"
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-14 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">入部希望の方はこちら</h2>

          <p className="mb-6">InstagramのDMからお気軽にご連絡ください</p>

          <a
            href="https://www.instagram.com/hashiru_arupaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-xl hover:scale-105 transition"
          >
            Instagramはこちら
          </a>
        </div>
      </motion.section>
    </main>
  );
}

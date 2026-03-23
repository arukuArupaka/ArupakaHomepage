export default function CorporatePage() {
  return (
    <main className="pt-24 px-8 max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">企業向けご案内</h1>
        <p className="text-gray-700">
          当サークルは業務委託を受け付けています。企画立案から運営、広報、展示制作まで、学生チームによる実務対応が可能です。
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">ご依頼方法</h2>
        <p className="text-gray-700">
          インスタグラムのDMからご連絡ください。DMを確認次第、担当者が折り返し対応いたします。
        </p>
        <p className="text-sm text-gray-500 mt-2">
          例：Instagramアカウント <strong>@your_instagram</strong>（※実際のアカウント名は下記で差し替えてください）
        </p>
        <a
          href="https://instagram.com/your_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
        >
          InstagramでDMを送る
        </a>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">受託実績（抜粋）</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>立命館大学</strong> — 立命館大学の管理をしている株式会社クレオテックから美化運動を促進するするためのアプリの作成の依頼を受けました。</li>
          <li><strong>大阪万博</strong> — 大阪府から2025年日本国際博覧会の依頼を受けました。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">対応可能な業務例</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>イベント運営支援</strong> — 企画設計・当日運営・運営マニュアル作成</li>
          <li><strong>広報・SNS運用</strong> — 投稿企画・運用代行・拡散施策</li>
          <li><strong>展示・コンテンツ制作</strong> — 企画構成・導線設計・制作ディレクション</li>
        </ul>
      </section>

      <footer className="mb-12">
        <p className="text-gray-700">
          業務委託のご相談はインスタグラムのDMで承ります。担当者が確認次第、折り返しご連絡いたします。
        </p>
      </footer>
    </main>
  );
}

import type React from "react"
// This is a helper component for consistent layout styling
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
import "./globals.css";
import Navigation from "@/components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* ★ 全ページ共通ヘッダー */}
        <Navigation />

        {/* ★ 各ページの中身 */}
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Uma rede social animal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

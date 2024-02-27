import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://blog-name.io"),
  title: {
    default: "blog-name",
    template: "%s | blog-name",
  },
  description: "연구하는 블로그 blog-name",
  category: "technology",
  openGraph: {
    title: "blog-name",
    description: "연구하는 블로그 blog-name",
    url: "https://blog-name.io",
    siteName: "blog-name",
    images: [
      {
        url: "https://blog-name.io/og.png", // og 이미지 경로는 public 폴더에 넣으시면 됩니다
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

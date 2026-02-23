import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Advay Chandramouli",
  description:
    "Software Engineer specializing in AI/ML. Portfolio showcasing projects, research, and experience.",
  keywords: [
    "software engineer",
    "AI/ML",
    "machine learning",
    "portfolio",
    "Advay Chandramouli",
  ],
  authors: [{ name: "Advay Chandramouli", url: "https://advaychandramouli.com" }],
  openGraph: {
    title: "Advay Chandramouli | Software & AI/ML Engineer",
    description:
      "Portfolio showcasing software engineering, AI/ML projects, and research.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advay Chandramouli | Software & AI/ML Engineer",
    description:
      "Portfolio showcasing software engineering, AI/ML projects, and research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className="font-serif min-h-screen">{children}</body>
    </html>
  );
}

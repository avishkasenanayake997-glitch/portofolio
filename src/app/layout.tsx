import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avishka Senanayake | Software Engineer",
  description:
    "Personal portfolio of Avishka Senanayake — Software Engineer and IT undergraduate at SLIIT. Hands-on experience in full-stack development, mobile apps, AI systems, and Next.js engineering.",
  keywords: [
    "Avishka Senanayake",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Python",
    "FastAPI",
    "AI",
    "SLIIT",
    "Portfolio",
  ],
  authors: [{ name: "Avishka Senanayake" }],
  openGraph: {
    title: "Avishka Senanayake | Software Engineer",
    description:
      "Software Engineer & IT Undergraduate at SLIIT. Explore full-stack, mobile, and AI engineering projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

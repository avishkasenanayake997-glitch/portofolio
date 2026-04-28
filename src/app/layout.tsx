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
  title: "Avishka Sahan | IT Specialist & Developer",
  description:
    "Personal portfolio of Avishka Sahan — IT undergraduate at SLIIT, developer, and IT support specialist. Explore projects, skills, and contact info.",
  keywords: ["Avishka Sahan", "IT Support", "Web Developer", "SLIIT", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Avishka Sahan" }],
  openGraph: {
    title: "Avishka Sahan | IT Specialist & Developer",
    description: "IT undergraduate at SLIIT with a passion for development and IT support.",
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

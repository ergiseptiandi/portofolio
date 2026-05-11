import AnimatedBackground from "@/components/AnimatedBackground";
import BottomNav from "@/components/BottomNav";
import CursorGlow from "@/components/CursorGlow";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://portfolio.paidev.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Erghi Septiandi Putra — Freelance Full-Stack Developer",
  description:
    "Portfolio Erghi Septiandi Putra — Freelance full-stack developer open for projects. Web, mobile, backend & DevOps. Next.js, Laravel, Go, Flutter, NestJS. Batam, Indonesia.",
  keywords: [
    "Erghi Septiandi Putra",
    "Ergi Septiandi",
    "full-stack developer",
    "freelance developer",
    "web developer",
    "mobile developer",
    "backend developer",
    "Next.js",
    "Laravel",
    "Go",
    "Flutter",
    "NestJS",
    "React",
    "TypeScript",
    "DevOps",
    "Batam",
    "Indonesia",
    "portfolio",
  ],
  authors: [{ name: "Erghi Septiandi Putra", url: siteUrl }],
  creator: "Erghi Septiandi Putra",
  publisher: "Erghi Septiandi Putra",
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  openGraph: {
    title: "Erghi Septiandi Putra — Freelance Full-Stack Developer",
    description:
      "Portfolio Erghi Septiandi Putra — Freelance full-stack developer open for projects. Web, mobile, backend & DevOps. Next.js, Laravel, Go, Flutter, NestJS. Batam, Indonesia.",
    url: siteUrl,
    siteName: "Erghi Septiandi Putra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/projects/portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Erghi Septiandi Putra — Freelance Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erghi Septiandi Putra — Freelance Full-Stack Developer",
    description:
      "Portfolio Erghi Septiandi Putra — Freelance full-stack developer open for projects. Web, mobile, backend & DevOps. Next.js, Laravel, Go, Flutter, NestJS. Batam, Indonesia.",
    images: [`${siteUrl}/projects/portfolio.png`],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} ${syne.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <CursorGlow />
          <JsonLd />
          <Navbar />
          <main className="relative pb-24 md:pb-0">{children}</main>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}

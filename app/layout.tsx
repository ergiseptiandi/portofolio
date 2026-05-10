import AnimatedBackground from "@/components/AnimatedBackground";
import CursorGlow from "@/components/CursorGlow";
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

export const metadata: Metadata = {
  title: "Erghi Septiandi Putra — Freelance Full-Stack Developer",
  description:
    "Freelance full-stack developer open for projects. Web, mobile, backend & DevOps. Next.js, Laravel, Go, Flutter, NestJS. Batam, Indonesia.",
  keywords: [
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
    "Erghi Septiandi Putra",
  ],
  openGraph: {
    title: "Erghi Septiandi Putra — Freelance Full-Stack Developer",
    description:
      "Freelance full-stack developer open for projects. Web, mobile, backend & DevOps. Next.js, Laravel, Go, Flutter, NestJS. Batam, Indonesia.",
    url: "https://portfolio.paidev.my.id/",
    siteName: "Erghi Septiandi Putra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://portfolio.paidev.my.id/projects/portfolio.png",
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
      "Freelance full-stack developer open for projects. Web, mobile, backend & DevOps. Next.js, Laravel, Go, Flutter, NestJS. Batam, Indonesia.",
    images: ["https://portfolio.paidev.my.id/projects/portfolio.png"],
  },
  icons: {
    icon: "/window.svg",
    shortcut: "/window.svg",
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
          <Navbar />
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

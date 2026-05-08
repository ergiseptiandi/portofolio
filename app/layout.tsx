import AnimatedBackground from "@/components/AnimatedBackground";
import BottomNav from "@/components/BottomNav";
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
  title: "Erghi Septiandi Putra — Full-Stack Developer & Builder",
  description:
    "I build web, mobile, and backend systems. Laravel, Next.js, NestJS, Flutter, Go.",
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
          <main className="relative pb-24 md:pb-0">{children}</main>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}

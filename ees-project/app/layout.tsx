import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer/page";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "نقابة المهندسين بالقاهرة",
  description: "نقابة المهندسين بالقاهرة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body>
        {children}

        <Footer />
      </body>
    </html>
  );
}
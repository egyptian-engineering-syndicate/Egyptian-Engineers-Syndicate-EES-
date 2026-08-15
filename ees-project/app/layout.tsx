import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer/page";

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
    <html lang="ar" dir="rtl">
      <body>
        {children}

        <Footer />
      </body>
    </html>
  );
}
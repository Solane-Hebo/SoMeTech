import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SomeTeck",
  description: "Modern Web Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="bg-[#1C3334] text-white">
            <Navbar />
            <Providers>{children}</Providers>
            <Footer />
      </body>
    </html>
  );
}
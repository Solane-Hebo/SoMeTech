import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/components/providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import InstallBootstrap from "@/components/InstallBootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCN Software - Sistema especifico para material de construção, ótica e auto peças",
  description: "Seu seguimento é em materiais para construção, auto peças, distribuidora, ferragens, acabamentos e lojas de tintas",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <InstallBootstrap />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

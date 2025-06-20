
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import InstallBootstrap from "@/components/InstallBootstrap";
import dynamic from "next/dynamic";

const PixelTracker = dynamic(() => import("@/components/PixelTracker"), { ssr: false });

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
    <html lang="pt-BR">
      <head>
        <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1731742927464023&ev=PageView&noscript=1" /></noscript>
      </head>
      <body className={inter.className}>
        <InstallBootstrap />
        <Header />
        <PixelTracker />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
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
    <html lang="pt-BR">
      <head>
        {/* Facebook Pixel Base Code */}
        <script
            dangerouslySetInnerHTML={{
              __html: `
              <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1731742927464023');
                fbq('track', 'PageView');
              </script>
              `,
            }}
          />
        <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1731742927464023&ev=PageView&noscript=1" /></noscript>
      </head>
      <body className={inter.className}>
        <InstallBootstrap />
        <Header />
        {/* <PixelTracker /> */}
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

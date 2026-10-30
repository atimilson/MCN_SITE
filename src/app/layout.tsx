import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Reveal } from "@/components/reveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-face",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070e2b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mcnsistemas.com.br"),
  title: {
    default:
      "MCN Software | ERP para Material de Construção, Auto Peças e Distribuidoras",
    template: "%s | MCN Software",
  },
  description:
    "Software de gestão especializado para materiais de construção, auto peças, distribuidoras, ferragens, acabamentos e lojas de tintas. Desde 2002, mais de 500 clientes em 13 estados.",
  keywords: [
    "ERP",
    "sistema de gestão",
    "material de construção",
    "auto peças",
    "distribuidora",
    "MCN Software",
    "MCN Sistemas",
    "Cuiabá",
  ],
  openGraph: {
    title: "MCN Software",
    description:
      "ERP especializado para materiais de construção, auto peças e distribuidoras.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1731742927464023&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Reveal />
      </body>
    </html>
  );
}

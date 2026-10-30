import type { Metadata } from "next";
import { Download, Headphones, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";
import { SITE, waLink } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a MCN Software em Cuiabá/MT. Telefones, WhatsApp, e-mail e formulário de contato.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Contatos() {
  const channels = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp vendas",
      value: SITE.whatsapp.label,
      href: waLink(),
      external: true,
      tone: "green",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: SITE.phones[0].label,
      href: SITE.phones[0].href,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: SITE.phones[1].label,
      href: SITE.phones[1].href,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
  ];

  return (
    <main>
      <Hero
        eyebrow="Contato"
        breadcrumbs={[{ label: "Contato" }]}
        title={
          <>
            Vamos conversar sobre a <span className="text-gradient">sua empresa</span>?
          </>
        }
        description="Tire dúvidas, peça uma demonstração ou fale com o suporte. Respondemos rápido pelo canal que você preferir."
        size="lg"
      />

      <section className={styles.channelsWrap}>
        <div className="container">
          <div className={styles.channels}>
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.value}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`${styles.channel} ${c.tone === "green" ? styles.green : ""}`}
                  data-reveal
                  style={d(i * 80)}
                >
                  <span className={styles.channelIcon}>
                    <Icon size={20} />
                  </span>
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.formCard} data-reveal>
            <span className="eyebrow">Envie uma mensagem</span>
            <h2>Como podemos ajudar?</h2>
            <p>
              Preencha o formulário e abriremos o WhatsApp com a sua mensagem pronta para
              envio.
            </p>
            <ContactForm />
          </div>

          <aside className={styles.side}>
            <div className={styles.mapCard} data-reveal="right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7685.424445623094!2d-56.121349!3d-15.607017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db218e70f4ca1%3A0x2fed47d1990b3b11!2sAv.%20Agr%C3%ADcola%20Paes%20de%20Barros%2C%20790%20-%20Cidade%20Alta%2C%20Cuiab%C3%A1%20-%20MT%2C%2078030-100%2C%20Brasil!5e0!3m2!1spt-PT!2spt!4v1723315555854!5m2!1spt-PT!2spt"
                loading="lazy"
                title="Localização MCN Software"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className={styles.address}>
                <span className={styles.addressIcon}>
                  <MapPin size={20} />
                </span>
                <div>
                  <strong>Nossa sede</strong>
                  <p>
                    {SITE.address.street} — {SITE.address.district}
                    <br />
                    {SITE.address.city} · CEP {SITE.address.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.hours} data-reveal="right" style={d(100)}>
              <Headphones size={20} />
              <div>
                <strong>Já é cliente? Suporte remoto</strong>
                <p>Baixe a ferramenta indicada pelo nosso técnico:</p>
                <div className={styles.downloads}>
                  <a href={SITE.downloads.teamviewer} download className="btn btn--ghost btn--sm">
                    <Download size={15} /> TeamViewer
                  </a>
                  <a href={SITE.downloads.anydesk} download className="btn btn--ghost btn--sm">
                    <Download size={15} /> AnyDesk
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

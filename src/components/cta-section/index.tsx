import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE, waLink } from "@/lib/site";
import styles from "./styles.module.css";

type Props = {
  title?: React.ReactNode;
  text?: string;
  message?: string;
};

export default function CTASection({
  title = (
    <>
      Pronto para ter o <span className="text-gradient">controle total</span> da sua
      empresa?
    </>
  ),
  text = "Fale com um consultor e agende uma demonstração do sistema MCN no seu segmento. Sem compromisso.",
  message = "Olá! Gostaria de agendar uma demonstração do sistema MCN.",
}: Props) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.panel} on-dark`} data-reveal="zoom">
          <div className={styles.grid} aria-hidden />
          <div className={styles.orb} aria-hidden />

          <div className={styles.copy}>
            <span className="eyebrow">Vamos conversar</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div className={styles.actions}>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--lg"
            >
              <FaWhatsapp size={20} /> Falar no WhatsApp
            </a>
            <div className={styles.phones}>
              {SITE.phones.map((p) => (
                <a key={p.href} href={p.href} className="btn btn--glass">
                  <Phone size={16} /> {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a MCN Sistemas em Cuiabá/MT. Telefones, WhatsApp e formulário de contato.",
};

export default function Contatos() {
  return (
    <>
      <Hero
        title="Contato"
        eyebrow="Estamos à disposição"
        banner="/assets/images/banner-contato.jpg"
      />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.intro}>
            <h2>Fale conosco</h2>
            <p>
              Preencha o formulário e abriremos o WhatsApp com sua mensagem
              pronta — ou use os canais ao lado.
            </p>
          </div>

          <div className={styles.layout}>
            <ContactForm />

            <aside className={styles.side}>
              <div className={styles.infoCard}>
                <h3>Canais de atendimento</h3>
                <ul className={styles.list}>
                  <li>
                    <FaPhone className={styles.icon} />
                    <Link href="tel:6530544338">(65) 3054-4338</Link>
                  </li>
                  <li>
                    <FaPhone className={styles.icon} />
                    <Link href="tel:6530544339">(65) 3054-4339</Link>
                  </li>
                  <li>
                    <FaWhatsapp className={styles.icon} size={18} />
                    <Link
                      href="https://wa.me/556592695937?text=Olá! Gostaria de mais informações sobre os sistemas MCN."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (65) 99269-5937
                    </Link>
                  </li>
                  <li>
                    <Mail size={18} className={styles.icon} />
                    <Link href="mailto:glaucia@mcnsistemas.com.br">
                      glaucia@mcnsistemas.com.br
                    </Link>
                  </li>
                  <li>
                    <MapPin size={18} className={styles.icon} />
                    <span>
                      Av. Agrícola Paes de Barros, 790 — Cuiabá/MT
                    </span>
                  </li>
                </ul>
              </div>

              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7685.424445623094!2d-56.121349!3d-15.607017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db218e70f4ca1%3A0x2fed47d1990b3b11!2sAv.%20Agr%C3%ADcola%20Paes%20de%20Barros%2C%20790%20-%20Cidade%20Alta%2C%20Cuiab%C3%A1%20-%20MT%2C%2078030-100%2C%20Brasil!5e0!3m2!1spt-PT!2spt!4v1723315555854!5m2!1spt-PT!2spt"
                  width="100%"
                  height="280"
                  loading="lazy"
                  title="Localização MCN Sistemas"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

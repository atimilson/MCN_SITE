"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

const features = [
  "Gestão completa e integrada",
  "Suporte técnico especializado",
  "Atualizações constantes",
  "Soluções personalizadas",
];

export default function CTASection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/556592695937?text=${encodeURIComponent(
      "Olá! Gostaria de mais informações sobre os sistemas MCN."
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div data-aos="fade-right">
            <h2 className={styles.title}>Construa com confiança!</h2>
            <p className={styles.lead}>
              Descubra como nossos softwares especializados em materiais de
              construção e autopeças podem impulsionar o seu negócio.
            </p>
            <div className={styles.features}>
              {features.map((item) => (
                <div key={item} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.action} data-aos="fade-left">
            <button
              type="button"
              className={styles.btn}
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp size={22} />
              Solicite um orçamento
            </button>
            <p className={styles.hint}>Resposta em até 24 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

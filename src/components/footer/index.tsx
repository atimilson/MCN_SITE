"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.css";

export function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link href="/">
                <Image
                  src="/assets/images/mcnsistemas-logo.png"
                  alt="MCN Sistemas"
                  quality={100}
                  width={200}
                  height={82}
                />
              </Link>
              <p>
                ERP especializado para materiais de construção, auto peças e
                distribuidoras. Tecnologia e suporte desde 2002.
              </p>
              <div className={styles.socials}>
                <Link
                  href="https://www.instagram.com/mcnsistemas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="https://www.youtube.com/@McnSoftware1731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} />
                </Link>
                <Link
                  href="https://wa.me/556592695937?text=Olá! Gostaria de mais informações sobre os sistemas MCN."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </Link>
              </div>
            </div>

            <div>
              <h4 className={styles.heading}>Navegação</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/sobre">Sobre nós</Link>
                </li>
                <li>
                  <Link href="/noticias">Notícias</Link>
                </li>
                <li>
                  <Link href="/video">Vídeos</Link>
                </li>
                <li>
                  <Link href="/revenda-autorizada">Revenda autorizada</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.heading}>Suporte remoto</h4>
              <ul className={styles.linkList}>
                <li>
                  <a
                    href="https://mcn-tutoriais.s3.sa-east-1.amazonaws.com/TeamViewerQS10.exe"
                    download
                  >
                    Baixar TeamViewer
                  </a>
                </li>
                <li>
                  <a
                    href="https://mcn-tutoriais.s3.sa-east-1.amazonaws.com/AnyDesk.exe"
                    download
                  >
                    Baixar AnyDesk
                  </a>
                </li>
                <li>
                  <Link href="/video">Tutoriais em vídeo</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.heading}>Contato</h4>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.icon} />
                <span>
                  Av. Agrícola Paes de Barros, 790
                  <br />
                  Cidade Alta — Cuiabá/MT
                  <br />
                  CEP 78030-210
                </span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.icon} />
                <div>
                  <a href="tel:6530544338">(65) 3054-4338</a>
                  <br />
                  <a href="tel:6530544339">(65) 3054-4339</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.icon} />
                <a href="mailto:glaucia@mcnsistemas.com.br">
                  glaucia@mcnsistemas.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          © <strong>MCN Sistemas</strong> {year} — Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  );
}

import { ProductProps } from "@/utils/product.type";
import { AppProps } from "@/utils/aplicativo.type";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";
import { Product } from "../product";
import { Aplicativo } from "../aplicativo";
import { getDataApp, getDataProduct } from "@/utils/actions/get-data";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import styles from "./styles.module.css";

export async function Header() {
  const { objects }: ProductProps = await getDataProduct();
  const data: AppProps = await getDataApp();

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topInner}`}>
          <div className={styles.topLeft}>
            <Link
              href="mailto:glaucia@mcnsistemas.com.br"
              className={styles.topLink}
            >
              <Mail size={16} />
              <span className="d-none d-xl-inline">
                glaucia@mcnsistemas.com.br
              </span>
            </Link>
          </div>

          <div className={styles.topRight}>
            <Link href="/video" className={styles.youtubeChip}>
              <FaYoutube size={22} color="#ff0000" />
              <span>Novos vídeos no YouTube</span>
            </Link>

            <Link
              href="https://wa.me/556592695937?text=Olá! Gostaria de mais informações sobre os sistemas MCN."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waChip}
            >
              <FaWhatsapp size={18} />
              <span>Vendas (65) 99269-5937</span>
            </Link>

            <Link
              href="https://www.instagram.com/mcnsistemas/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topLink}
              aria-label="Instagram MCN Sistemas"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.brandRow}>
        <div className={`container ${styles.brandGrid}`}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/assets/images/mcnsistemas-logo.png"
              alt="MCN Sistemas"
              quality={100}
              priority
              width={220}
              height={90}
              className="img-fluid"
            />
          </Link>

          <div className={`${styles.downloadLinks} d-none d-md-flex`}>
            <a
              href="https://mcn-tutoriais.s3.sa-east-1.amazonaws.com/TeamViewerQS10.exe"
              download
              className={styles.downloadLink}
              title="Baixar TeamViewer"
            >
              <Image
                src="/assets/images/mcnsistemas-baixe-o-teamviewer.png"
                alt="Baixe o TeamViewer"
                quality={90}
                width={220}
                height={56}
                className="img-fluid"
              />
            </a>
            <a
              href="https://mcn-tutoriais.s3.sa-east-1.amazonaws.com/AnyDesk.exe"
              download
              className={styles.downloadLink}
              title="Baixar AnyDesk"
            >
              <Image
                src="/assets/images/mcnsistemas-anydesk-download.png"
                alt="Baixe o AnyDesk"
                quality={90}
                width={180}
                height={56}
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg ${styles.navBar}`}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Abrir menu de navegação"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/sobre">
                  Sobre nós
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produtos
                </a>
                <ul className="dropdown-menu">
                  <Product objects={objects} />
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aplicativos
                </a>
                <ul className="dropdown-menu">
                  <Aplicativo data={data} />
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/revenda-autorizada">
                  Revenda autorizada
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/noticias">
                  Notícias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/video">
                  Vídeos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

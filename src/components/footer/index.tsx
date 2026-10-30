import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getDataProduct, safe } from "@/utils/actions/get-data";
import type { ProductProps } from "@/utils/product.type";
import { splitTitle } from "@/lib/content";
import { SITE, waLink } from "@/lib/site";
import { PlayLink } from "@/components/play-badge";
import styles from "./styles.module.css";

export async function Footer() {
  const { objects: products } = await safe<ProductProps>(getDataProduct(), { objects: [] });
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" aria-label="MCN Software — início">
              <Image
                src="/assets/images/mcnsistemas-logo.png"
                alt="MCN Software"
                width={170}
                height={69}
                className="logo-white"
              />
            </Link>
            <p>
              ERP especializado para materiais de construção, auto peças e distribuidoras.
              Tecnologia, fiscal e suporte de verdade desde {SITE.foundedYear}.
            </p>
            <div className={styles.socials}>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={19} />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
            </div>
            <div className={styles.plays}>
              {SITE.playApps.map((app) => (
                <PlayLink key={app.url} href={app.url} name={app.name} />
              ))}
            </div>
          </div>

          <nav className={styles.col} aria-label="Soluções">
            <h4>Soluções</h4>
            <ul>
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link href={`/product/${p.slug}`}>{splitTitle(p.title).main}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label="Empresa">
            <h4>Empresa</h4>
            <ul>
              <li>
                <Link href="/sobre">Sobre nós</Link>
              </li>
              <li>
                <Link href="/noticias">Notícias</Link>
              </li>
              <li>
                <Link href="/video">Vídeos e tutoriais</Link>
              </li>
              <li>
                <Link href="/revenda-autorizada">Revendas autorizadas</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.col}>
            <h4>Contato</h4>
            <ul className={styles.contact}>
              <li>
                <MapPin size={17} />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.district} — {SITE.address.city}
                  <br />
                  CEP {SITE.address.zip}
                </span>
              </li>
              <li>
                <Phone size={17} />
                <span>
                  {SITE.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 ? " · " : null}
                      <a href={p.href}>{p.label}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <FaWhatsapp size={17} />
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  {SITE.whatsapp.label}
                </a>
              </li>
              <li>
                <Mail size={17} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.support}>
          <div>
            <strong>Precisa de suporte remoto?</strong>
            <span>Baixe a ferramenta indicada pelo nosso técnico.</span>
          </div>
          <div className={styles.supportLinks}>
            <a href={SITE.downloads.teamviewer} download className="btn btn--glass btn--sm">
              <Download size={16} /> TeamViewer
            </a>
            <a href={SITE.downloads.anydesk} download className="btn btn--glass btn--sm">
              <Download size={16} /> AnyDesk
            </a>
            <Link href="/video" className="btn btn--glass btn--sm">
              Tutoriais <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.wordmark} aria-hidden>
          MCN SOFTWARE
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {SITE.legalName}. Todos os direitos reservados.
          </span>
          <span>Feito em Cuiabá/MT para todo o Brasil.</span>
        </div>
      </div>
    </footer>
  );
}

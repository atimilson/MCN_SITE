"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Instagram,
  Mail,
  Menu,
  Phone,
  X,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { iconFor } from "@/lib/icons";
import { SITE, waLink } from "@/lib/site";
import styles from "./styles.module.css";

export type NavItem = {
  slug: string;
  href: string;
  title: string;
  sub: string;
};

type Props = {
  products: NavItem[];
  apps: NavItem[];
};

type MenuKey = "produtos" | "apps" | null;

const LINKS = [
  { href: "/sobre", label: "Sobre" },
  { href: "/video", label: "Vídeos" },
  { href: "/noticias", label: "Notícias" },
  { href: "/revenda-autorizada", label: "Revendas" },
  { href: "/contato", label: "Contato" },
];

export function NavBar({ products, apps }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (key: MenuKey) => {
    clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  const solid = scrolled || open !== null;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const menus: { key: Exclude<MenuKey, null>; label: string; items: NavItem[]; title: string; text: string }[] = [
    {
      key: "produtos",
      label: "Soluções",
      items: products,
      title: "ERP sob medida para o seu segmento",
      text: "Módulos pensados para a rotina real do balcão, do estoque e do fiscal.",
    },
    {
      key: "apps",
      label: "Aplicativos",
      items: apps,
      title: "A gestão saindo do balcão",
      text: "Apps integrados ao ERP para vender, contar estoque e conferir cargas.",
    },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${solid ? styles.solid : ""}`}
        data-scrolled={scrolled || undefined}
      >
        <div className={styles.topBar}>
          <div className={`container ${styles.topInner}`}>
            <div className={styles.topGroup}>
              <span className={styles.topLabel}>Suporte remoto</span>
              <a href={SITE.downloads.teamviewer} download className={styles.topLink}>
                <Download size={14} /> TeamViewer
              </a>
              <a href={SITE.downloads.anydesk} download className={styles.topLink}>
                <Download size={14} /> AnyDesk
              </a>
            </div>
            <div className={styles.topGroup}>
              <a href={`mailto:${SITE.email}`} className={styles.topLink}>
                <Mail size={14} /> {SITE.email}
              </a>
              {SITE.phones.map((p) => (
                <a key={p.href} href={p.href} className={styles.topLink}>
                  <Phone size={14} /> {p.label}
                </a>
              ))}
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.topIcon}
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.topIcon}
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bar}>
          <div className={`container ${styles.barInner}`}>
            <Link href="/" className={styles.logo} aria-label="MCN Software — início">
              <Image
                src="/assets/images/mcnsistemas-logo.png"
                alt="MCN Software"
                width={245}
                height={100}
                priority
                className={styles.logoImg}
              />
            </Link>

            <nav className={styles.nav} aria-label="Principal">
              <ul className={styles.navList}>
                {menus.map((m) => (
                  <li
                    key={m.key}
                    className={styles.navItem}
                    onMouseEnter={() => enter(m.key)}
                    onMouseLeave={leave}
                  >
                    <button
                      type="button"
                      className={`${styles.navLink} ${open === m.key ? styles.navLinkOpen : ""}`}
                      aria-expanded={open === m.key}
                      aria-haspopup="true"
                      onClick={() => setOpen(open === m.key ? null : m.key)}
                      onFocus={() => enter(m.key)}
                    >
                      {m.label}
                      <ChevronDown size={15} className={styles.chev} />
                    </button>

                    <div
                      className={`${styles.mega} ${open === m.key ? styles.megaOpen : ""}`}
                      onMouseEnter={() => enter(m.key)}
                      onMouseLeave={leave}
                    >
                      <div className={styles.megaInner}>
                        <div className={styles.megaGrid}>
                          {m.items.map((item) => {
                            const Icon = iconFor(item.slug, item.title);
                            return (
                              <Link key={item.slug} href={item.href} className={styles.megaItem}>
                                <span className={styles.megaIcon}>
                                  <Icon size={20} strokeWidth={1.8} />
                                </span>
                                <span>
                                  <strong>{item.title}</strong>
                                  {item.sub ? <small>{item.sub}</small> : null}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <aside className={styles.megaPromo}>
                          <span className="eyebrow">MCN Software</span>
                          <h3>{m.title}</h3>
                          <p>{m.text}</p>
                          <a
                            href={waLink(`Olá! Quero agendar uma demonstração (${m.label}).`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--white btn--sm"
                          >
                            Agendar demonstração <ArrowRight size={16} className="arrow" />
                          </a>
                        </aside>
                      </div>
                    </div>
                  </li>
                ))}

                {LINKS.map((l) => (
                  <li key={l.href} className={styles.navItem}>
                    <Link
                      href={l.href}
                      className={`${styles.navLink} ${isActive(l.href) ? styles.navLinkActive : ""}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actions}>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--sm ${styles.cta}`}
              >
                <FaWhatsapp size={17} />
                <span>Fale com vendas</span>
              </a>
              <button
                type="button"
                className={styles.burger}
                aria-label="Abrir menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer mobile */}
      <div
        className={`${styles.drawerBackdrop} ${mobileOpen ? styles.drawerBackdropOpen : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />
      <aside
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
        aria-label="Menu"
        aria-hidden={!mobileOpen}
      >
        <div className={styles.drawerHead}>
          <Image
            src="/assets/images/mcnsistemas-logo.png"
            alt="MCN Software"
            width={150}
            height={61}
            className="logo-white"
          />
          <button
            type="button"
            className={styles.drawerClose}
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {menus.map((m) => (
            <div key={m.key} className={styles.drawerGroup}>
              <button
                type="button"
                className={styles.drawerLink}
                aria-expanded={mobileSection === m.key}
                onClick={() => setMobileSection(mobileSection === m.key ? null : m.key)}
              >
                {m.label}
                <ChevronDown
                  size={18}
                  className={mobileSection === m.key ? styles.chevOpen : undefined}
                />
              </button>
              <div
                className={`${styles.drawerSub} ${mobileSection === m.key ? styles.drawerSubOpen : ""}`}
              >
                <div>
                  {m.items.map((item) => {
                    const Icon = iconFor(item.slug, item.title);
                    return (
                      <Link key={item.slug} href={item.href} className={styles.drawerSubItem}>
                        <Icon size={18} strokeWidth={1.8} />
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.drawerLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.drawerFoot}>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <FaWhatsapp size={18} /> {SITE.whatsapp.label}
          </a>
          <div className={styles.drawerPhones}>
            {SITE.phones.map((p) => (
              <a key={p.href} href={p.href}>
                <Phone size={15} /> {p.label}
              </a>
            ))}
          </div>
          <div className={styles.drawerDownloads}>
            <a href={SITE.downloads.teamviewer} download>
              <Download size={14} /> TeamViewer
            </a>
            <a href={SITE.downloads.anydesk} download>
              <Download size={14} /> AnyDesk
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

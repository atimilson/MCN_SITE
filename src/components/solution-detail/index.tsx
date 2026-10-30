import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Headphones, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/hero";
import CTASection from "@/components/cta-section";
import { iconFor } from "@/lib/icons";
import { isSvg, parseDescription, splitTitle } from "@/lib/content";
import { SITE, playAppFor, waLink } from "@/lib/site";
import { PlayBadge } from "@/components/play-badge";
import type { ObjectProduct } from "@/utils/product.type";
import styles from "./styles.module.css";

type Props = {
  item: ObjectProduct;
  kind: "solucao" | "aplicativo";
  related: ObjectProduct[];
};

const COPY = {
  solucao: {
    label: "Soluções",
    eyebrow: "Solução MCN",
    base: "/product",
    relatedTitle: "Outras soluções",
    noun: "o sistema",
  },
  aplicativo: {
    label: "Aplicativos",
    eyebrow: "Aplicativo MCN",
    base: "/aplicativo",
    relatedTitle: "Outros aplicativos",
    noun: "o aplicativo",
  },
} as const;

type Block = { type: "p"; text: string } | { type: "list"; items: string[] };

/** Linhas curtas sem pontuação final viram lista; o resto, parágrafos. */
function toBlocks(lines: string[]): Block[] {
  const blocks: Block[] = [];
  for (const line of lines) {
    const short = line.length < 70 && !/[.:;!?]$/.test(line);
    const last = blocks[blocks.length - 1];
    if (short) {
      if (last?.type === "list") last.items.push(line);
      else blocks.push({ type: "list", items: [line] });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  return blocks;
}

export function SolutionDetail({ item, kind, related }: Props) {
  const c = COPY[kind];
  const { main, sub } = splitTitle(item.title);
  const parsed = parseDescription(item.metadata?.descricao);
  const cover = item.metadata?.capa?.url;
  const svg = isSvg(cover);
  const Icon = iconFor(item.slug, item.title);
  const message = `Olá! Gostaria de saber mais sobre ${c.noun}: ${item.title}`;
  const playApp = kind === "aplicativo" ? playAppFor(item.slug, item.title) : null;

  // Sem subtítulo no título: as primeiras frases curtas viram a descrição do hero
  let introCount = 0;
  if (!sub) {
    let len = 0;
    while (introCount < parsed.paragraphs.length && len + parsed.paragraphs[introCount].length < 170) {
      len += parsed.paragraphs[introCount].length;
      introCount++;
    }
  }
  let intro = parsed.paragraphs.slice(0, introCount).join(" ");
  if (intro.endsWith(":") && parsed.bullets.length) {
    intro = parsed.bullets.slice(0, 3).join(" · ") + ".";
  }
  const blocks = toBlocks(parsed.paragraphs.slice(introCount));
  const hasBody = blocks.length + parsed.modules.length + parsed.bullets.length > 0;

  return (
    <main>
      <Hero
        eyebrow={c.eyebrow}
        breadcrumbs={[{ label: c.label }, { label: main }]}
        title={main}
        description={sub || intro || "Fale com a nossa equipe e conheça todos os recursos."}
        aside={
          cover ? (
            <div className={`${styles.shot} ${svg ? styles.shotTall : ""}`}>
              <div className={styles.shotGlow} aria-hidden />
              <div className={styles.shotFrame}>
                <Image
                  src={cover}
                  alt={main}
                  fill
                  priority
                  sizes="(max-width: 960px) 92vw, 560px"
                  className={svg ? styles.shotContain : styles.shotCover}
                  unoptimized={svg}
                />
              </div>
              <span className={`${styles.shotBadge} glass`}>
                <Icon size={18} /> {kind === "solucao" ? "ERP MCN" : "Integrado ao ERP"}
              </span>
            </div>
          ) : undefined
        }
      >
        <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
          <FaWhatsapp size={18} /> Solicitar demonstração
        </a>
        {playApp ? (
          <PlayBadge href={playApp.url} name={playApp.name} />
        ) : (
          <a href={SITE.phones[0].href} className="btn btn--glass">
            <Phone size={16} /> {SITE.phones[0].label}
          </a>
        )}
      </Hero>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.content}>
            {hasBody ? (
              <>
                {blocks.length > 0 ? (
                  <div data-reveal>
                    <span className="eyebrow">Visão geral</span>
                    <div className={`prose ${styles.prose}`}>
                      {blocks.map((b, i) =>
                        b.type === "list" ? (
                          <ul key={i} className={styles.checks}>
                            {b.items.map((it) => (
                              <li key={it}>
                                <Check size={16} strokeWidth={2.5} /> {it}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p key={i}>{b.text}</p>
                        )
                      )}
                    </div>
                  </div>
                ) : null}

                {parsed.modules.length > 0 ? (
                  <div data-reveal>
                    <span className="eyebrow">Módulos e recursos</span>
                    <h2 className={styles.blockTitle}>O que está incluso</h2>
                    <ul className={styles.modules}>
                      {parsed.modules.map((m) => (
                        <li key={m}>
                          <span>
                            <Check size={14} strokeWidth={3} />
                          </span>
                          {m}
                        </li>
                      ))}
                      <li className={styles.moreModule}>
                        <span>
                          <Sparkles size={14} />
                        </span>
                        E muito mais
                      </li>
                    </ul>
                  </div>
                ) : null}

                {parsed.bullets.length > 0 ? (
                  <div data-reveal>
                    <span className="eyebrow">Vantagens</span>
                    <h2 className={styles.blockTitle}>Por que usar</h2>
                    <ol className={styles.bullets}>
                      {parsed.bullets.map((b, i) => (
                        <li key={b}>
                          <span>{String(i + 1).padStart(2, "0")}</span>
                          {b}
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}
              </>
            ) : (
              <div data-reveal>
                <span className="eyebrow">Sobre {c.noun}</span>
                <div className={`prose ${styles.prose}`}>
                  <p>
                    <strong>{main}</strong> faz parte do ecossistema MCN e funciona integrado ao
                    ERP, com dados sincronizados em tempo real. Fale com um especialista para ver{" "}
                    {c.noun} funcionando na prática e entender como ele se encaixa na rotina da
                    sua empresa.
                  </p>
                </div>
              </div>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard} data-reveal="right">
              <span className={styles.sideIcon}>
                <Icon size={24} />
              </span>
              <h3>Veja {c.noun} em ação</h3>
              <p>Agende uma demonstração com um consultor MCN. Rápido e sem compromisso.</p>
              <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                <FaWhatsapp size={18} /> Falar no WhatsApp
              </a>
              {playApp ? (
                <div className={styles.sidePlay}>
                  <span>
                    Já é cliente? Baixe o <strong>{playApp.name}</strong>
                  </span>
                  <PlayBadge href={playApp.url} name={playApp.name} />
                </div>
              ) : null}
              <ul className={styles.sideList}>
                <li>
                  <ShieldCheck size={16} /> Implantação acompanhada
                </li>
                <li>
                  <Headphones size={16} /> Suporte especializado
                </li>
                <li>
                  <Sparkles size={16} /> Atualizações constantes
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section section--paper section--tight">
          <div className="container">
            <div className={styles.relatedHead} data-reveal>
              <span className="eyebrow">Continue explorando</span>
              <h2 className="h2">{c.relatedTitle}</h2>
            </div>
            <div className={styles.related}>
              {related.map((r, i) => {
                const RIcon = iconFor(r.slug, r.title);
                const t = splitTitle(r.title);
                return (
                  <Link
                    key={r.slug}
                    href={`${c.base}/${r.slug}`}
                    className={styles.relatedCard}
                    data-reveal
                    style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
                  >
                    <span className={styles.relatedIcon}>
                      <RIcon size={20} />
                    </span>
                    <strong>{t.main}</strong>
                    <ArrowRight size={18} className={styles.relatedArrow} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection message={message} />
    </main>
  );
}

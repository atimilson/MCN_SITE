import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { iconFor } from "@/lib/icons";
import { isSvg, splitTitle } from "@/lib/content";
import type { ObjectApp } from "@/utils/aplicativo.type";
import { PlayLink } from "@/components/play-badge";
import { FaGooglePlay } from "react-icons/fa";
import { SITE, playAppFor } from "@/lib/site";
import styles from "./apps.module.css";

/** 3. Ecossistema — uma imagem real de apoio e a lista dos aplicativos. */
export function AppsShowcase({ apps }: { apps: ObjectApp[] }) {
  if (!apps.length) return null;

  const raster = (a: ObjectApp) => !!a.metadata?.capa?.url && !isSvg(a.metadata.capa.url);
  const showcase =
    apps.find((a) => raster(a) && /mobile|externa/i.test(`${a.slug} ${a.title}`)) ??
    apps.find(raster);

  return (
    <section className="section section--ink grid-bg" id="aplicativos">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <header data-reveal>
            <span className="eyebrow">Aplicativos</span>
            <h2 className="h2">
              A gestão também <span className="text-gradient">fora do balcão</span>
            </h2>
            <p className="lead">
              Apps integrados ao ERP para vender na rua, contar estoque e conferir cargas — tudo
              sincronizado em tempo real.
            </p>
            <div className={styles.stores}>
              <span className={styles.storesLabel}>Baixe no Android</span>
              <div className={styles.storesGrid}>
                {SITE.playApps.map((app) => (
                  <PlayLink key={app.url} href={app.url} name={app.name} />
                ))}
              </div>
            </div>
          </header>

          {showcase ? (
            <div className={styles.shot} data-reveal="zoom">
              <Image
                src={showcase.metadata.capa!.url}
                alt={splitTitle(showcase.title).main}
                fill
                sizes="(max-width: 960px) 92vw, 520px"
                className={styles.shotImg}
              />
            </div>
          ) : null}
        </div>

        <ul className={styles.list}>
          {apps.map((app, i) => {
            const Icon = iconFor(app.slug, app.title);
            const onPlay = playAppFor(app.slug, app.title);
            return (
              <li key={app.slug} data-reveal style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
                <Link href={`/aplicativo/${app.slug}`} className={styles.row}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.icon}>
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className={styles.name}>{splitTitle(app.title).main}</span>
                  {onPlay ? (
                    <span className={styles.onPlay} title={`${onPlay.name} no Google Play`}>
                      <FaGooglePlay size={12} aria-hidden /> Android
                    </span>
                  ) : null}
                  <ArrowUpRight size={18} className={styles.arrow} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

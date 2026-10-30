"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { getYouTubeId } from "@/lib/content";
import styles from "./styles.module.css";

type VideoLink = {
  url: string;
  link_title: string;
};

type Category = {
  slug: string;
  metadata: {
    category_name: string;
    links: VideoLink[];
  };
};

function VideoCard({ id, title, index }: { id: string; title: string; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className={styles.card} data-reveal style={{ "--d": `${(index % 3) * 90}ms` } as React.CSSProperties}>
      <div className={styles.player}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label={`Assistir: ${title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className={styles.play}>
              <Play size={26} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </article>
  );
}

export function VideoGallery({ categories }: { categories: Category[] }) {
  const usable = (categories ?? []).filter((c) => c.metadata?.links?.length);
  const [active, setActive] = useState(usable[0]?.slug);

  if (!usable.length) {
    return <p className={styles.empty}>Nenhum vídeo disponível no momento.</p>;
  }

  const current = usable.find((c) => c.slug === active) ?? usable[0];
  const videos = current.metadata.links
    .map((v) => ({ id: getYouTubeId(v.url), title: v.link_title }))
    .filter((v): v is { id: string; title: string } => !!v.id);

  return (
    <div>
      {usable.length > 1 ? (
        <div className={styles.tabs} role="tablist">
          {usable.map((c) => (
            <button
              key={c.slug}
              type="button"
              role="tab"
              aria-selected={c.slug === current.slug}
              className={`${styles.tab} ${c.slug === current.slug ? styles.tabActive : ""}`}
              onClick={() => setActive(c.slug)}
            >
              {c.metadata.category_name}
              <span>{c.metadata.links.length}</span>
            </button>
          ))}
        </div>
      ) : (
        <h2 className={styles.categoryTitle}>
          {current.metadata.category_name}
          <span>{videos.length} vídeos</span>
        </h2>
      )}

      <div className={styles.grid} key={current.slug}>
        {videos.map((v, i) => (
          <VideoCard key={`${v.id}-${i}`} id={v.id} title={v.title} index={i} />
        ))}
      </div>
    </div>
  );
}

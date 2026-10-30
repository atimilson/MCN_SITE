import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { formatDate, truncate } from "@/lib/content";
import type { ObjectPost } from "@/utils/blog.type";
import styles from "./styles.module.css";

type Props = {
  post: ObjectPost;
  variant?: "default" | "featured";
  delay?: number;
};

export function NewsCard({ post, variant = "default", delay = 0 }: Props) {
  const featured = variant === "featured";
  const date = formatDate(post.published_at);

  return (
    <Link
      href={`/noticias/${post.slug}`}
      className={`${styles.card} ${featured ? styles.featured : ""}`}
      data-reveal
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      <div className={styles.media}>
        {post.metadata?.capa?.url ? (
          <Image
            src={post.metadata.capa.url}
            alt={post.title}
            fill
            className={styles.img}
            sizes={featured ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 33vw"}
          />
        ) : null}
      </div>
      <div className={styles.body}>
        {date ? (
          <span className={styles.date}>
            <CalendarDays size={14} /> {date}
          </span>
        ) : null}
        <h3>{post.title}</h3>
        <p>{truncate(post.metadata?.posts?.descricao, featured ? 240 : 130)}</p>
        <span className={styles.more}>
          Ler matéria <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}

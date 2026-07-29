import type { Metadata } from "next";
import { getDataBlog } from "@/utils/actions/get-data";
import { BlogProps } from "@/utils/blog.type";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Novidades, dicas e conteúdos da MCN Sistemas.",
};

function truncateText(text: string, maxLength: number) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

export default async function Noticias() {
  const data: BlogProps = await getDataBlog();
  const posts = data?.objects ?? [];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-aos="fade-down">
          <h1 className="section-title">Notícias</h1>
          <div className="section-underline" />
          <p className="section-lead">
            Conteúdos e novidades para o seu negócio
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((news) => (
            <article className={styles.card} key={news.slug}>
              <div className={styles.imageWrap}>
                <Image
                  src={news.metadata.capa.url}
                  alt={news.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.body}>
                <h2 className={styles.title}>{news.title}</h2>
                <p className={styles.excerpt}>
                  {truncateText(news.metadata.posts.descricao, 150)}
                </p>
                <Link
                  href={`/noticias/${news.slug}`}
                  className="btn-mcn btn-mcn-outline"
                  style={{ alignSelf: "flex-start", padding: "0.55rem 1.1rem" }}
                >
                  Ler mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

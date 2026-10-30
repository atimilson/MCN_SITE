import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, UserRound } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/hero";
import { NewsCard } from "@/components/news-card";
import CTASection from "@/components/cta-section";
import { getDataBlog, getItemBySlug, safe } from "@/utils/actions/get-data";
import type { BlogProps } from "@/utils/blog.type";
import { formatDate, truncate } from "@/lib/content";
import styles from "./page.module.css";

type Params = { params: { slug: string } };

async function load(slug: string) {
  const data = await safe<BlogProps | null>(getItemBySlug(slug), null);
  return data?.objects?.[0] ?? null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await load(params.slug);
  if (!post) return { title: "Notícia não encontrada" };
  return {
    title: post.title,
    description: truncate(post.metadata?.posts?.descricao, 160),
    openGraph: {
      type: "article",
      images: post.metadata?.capa?.url ? [post.metadata.capa.url] : undefined,
    },
  };
}

export default async function NoticiaPage({ params }: Params) {
  const [post, blog] = await Promise.all([
    load(params.slug),
    safe<BlogProps>(getDataBlog(), { objects: [] }),
  ]);
  if (!post) notFound();

  const date = formatDate(post.published_at);
  const author = post.metadata?.posts?.autor;
  const paragraphs = (post.metadata?.posts?.descricao || "")
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const others = blog.objects.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareText = encodeURIComponent(
    `${post.title} — https://www.mcnsistemas.com.br/noticias/${post.slug}`
  );

  return (
    <main>
      <Hero
        eyebrow="Notícia"
        breadcrumbs={[{ href: "/noticias", label: "Notícias" }, { label: post.title }]}
        title={post.title}
        size="lg"
        description={
          <div className={styles.meta}>
            {date ? (
              <span>
                <CalendarDays size={16} /> {date}
              </span>
            ) : null}
            {author ? (
              <span>
                <UserRound size={16} /> Por {author}
              </span>
            ) : null}
          </div>
        }
      />

      <article className={styles.article}>
        <div className="container">
          {post.metadata?.capa?.url ? (
            <div className={styles.cover} data-reveal="zoom">
              <Image
                src={post.metadata.capa.url}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1040px"
                className={styles.coverImg}
              />
            </div>
          ) : null}

          <div className={styles.body}>
            <div className={`prose ${styles.prose}`} data-reveal>
              {paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? styles.first : undefined}>
                  {p}
                </p>
              ))}
            </div>

            <footer className={styles.footer}>
              <Link href="/noticias" className="btn btn--ghost btn--sm">
                <ArrowLeft size={16} /> Todas as notícias
              </Link>
              <a
                href={`https://wa.me/?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--sm"
              >
                <FaWhatsapp size={16} /> Compartilhar
              </a>
            </footer>
          </div>
        </div>
      </article>

      {others.length > 0 ? (
        <section className="section section--paper section--tight">
          <div className="container">
            <h2 className={`h2 ${styles.othersTitle}`} data-reveal>
              Leia também
            </h2>
            <div className={styles.others}>
              {others.map((p, i) => (
                <NewsCard key={p.slug} post={p} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection />
    </main>
  );
}

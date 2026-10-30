import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Hero } from "@/components/hero";
import { NewsCard } from "@/components/news-card";
import CTASection from "@/components/cta-section";
import SimpleInstagramFeed from "@/components/instagram/simple";
import { getDataBlog, safe } from "@/utils/actions/get-data";
import type { BlogProps } from "@/utils/blog.type";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Novidades, dicas de gestão e conteúdos da MCN Software.",
};

export default async function Noticias() {
  const { objects: posts } = await safe<BlogProps>(getDataBlog(), { objects: [] });
  const [first, ...rest] = posts;

  return (
    <main>
      <Hero
        eyebrow="Blog MCN"
        breadcrumbs={[{ label: "Notícias" }]}
        title={
          <>
            Notícias e <span className="text-gradient">conteúdos</span>
          </>
        }
        description="Novidades da MCN, mudanças fiscais e dicas práticas para fazer a sua loja vender mais e perder menos."
      />

      <section className="section">
        <div className="container">
          {first ? (
            <>
              <NewsCard post={first} variant="featured" />
              {rest.length > 0 ? (
                <div className={styles.grid}>
                  {rest.map((post, i) => (
                    <NewsCard key={post.slug} post={post} delay={(i % 3) * 100} />
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <div className={styles.empty}>
              <Newspaper size={32} />
              <p>Nenhuma notícia publicada ainda. Volte em breve!</p>
            </div>
          )}
        </div>
      </section>

      <div className="section--paper">
        <SimpleInstagramFeed />
      </div>

      <CTASection />
    </main>
  );
}

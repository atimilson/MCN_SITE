import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Testimonials } from "@/components/testimonials";
import CTASection from "@/components/cta-section";
import { NewsCard } from "@/components/news-card";
import SimpleInstagramFeed from "@/components/instagram/simple";
import { HomeHero } from "@/components/home/hero";
import { Segments } from "@/components/home/segments";
import { Platform } from "@/components/home/platform";
import { AppsShowcase } from "@/components/home/apps";
import { AboutTeaser } from "@/components/home/about";
import {
  getDataApp,
  getDataBlog,
  getDataHome,
  getDataProduct,
  safe,
} from "@/utils/actions/get-data";
import { getInstagramPosts } from "@/utils/actions/get-instagram-posts";
import type { HomeProps } from "@/utils/home.type";
import type { ProductProps } from "@/utils/product.type";
import type { AppProps } from "@/utils/aplicativo.type";
import type { BlogProps } from "@/utils/blog.type";
import styles from "./page.module.css";

/**
 * Narrativa da home, uma pergunta por seção:
 * hero (o que é) → segmentos (é para mim?) → plataforma (o que resolve)
 * → apps (até onde vai) → quem somos (posso confiar?) → depoimentos (prova)
 * → notícias + Instagram (está ativo) → CTA (próximo passo).
 */
export default async function Home() {
  const [home, products, apps, blog, instagram] = await Promise.all([
    safe<HomeProps | null>(getDataHome(), null),
    safe<ProductProps>(getDataProduct(), { objects: [] }),
    safe<AppProps>(getDataApp(), { objects: [] }),
    safe<BlogProps>(getDataBlog(), { objects: [] }),
    getInstagramPosts(6),
  ]);

  const object = home?.object;
  const posts = blog.objects.slice(0, 3);

  return (
    <main>
      <HomeHero />
      <Segments products={products.objects} />
      <Platform />
      <AppsShowcase apps={apps.objects} />
      <AboutTeaser />
      {object ? <Testimonials object={object} /> : null}

      {posts.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className={styles.head} data-reveal>
              <div>
                <span className="eyebrow">Notícias</span>
                <h2 className="h2">Novidades e conteúdos</h2>
              </div>
              <Link href="/noticias" className="link-arrow">
                Ver todas <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.newsGrid}>
              {posts.map((post, i) => (
                <NewsCard key={post.slug} post={post} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div className="section--paper">
        <SimpleInstagramFeed posts={instagram.posts} source={instagram.source} />
      </div>

      <CTASection />
    </main>
  );
}

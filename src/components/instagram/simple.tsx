import { Instagram } from "lucide-react";
import Image from "next/image";
import {
  getInstagramPosts,
  type InstagramPost,
} from "@/utils/actions/get-instagram-posts";
import { SITE } from "@/lib/site";
import styles from "./simple.module.css";

type Props = {
  posts?: InstagramPost[];
  source?: "graph" | "fallback";
};

export default async function SimpleInstagramFeed({ posts }: Props) {
  const feed =
    posts && posts.length > 0 ? posts : (await getInstagramPosts(6)).posts;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.head}>
          <div data-reveal>
            <span className="eyebrow">Instagram</span>
            <h2 className="h2">
              Acompanhe a <span className="text-gradient">@mcnsistemas</span>
            </h2>
          </div>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.follow}`}
            data-reveal
          >
            <Instagram size={18} /> Seguir no Instagram
          </a>
        </div>

        <div className={styles.grid}>
          {feed.map((post, i) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.post}
              data-reveal
              style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 50vw, 17vw"
                unoptimized={post.imageUrl.startsWith("http")}
              />
              <div className={styles.overlay}>
                <Instagram size={22} />
                <p>{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

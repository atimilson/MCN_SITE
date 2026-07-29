import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  getInstagramPosts,
  type InstagramPost,
} from "@/utils/actions/get-instagram-posts";
import styles from "./simple.module.css";

type Props = {
  posts?: InstagramPost[];
  source?: "graph" | "fallback";
};

export default async function SimpleInstagramFeed({ posts, source }: Props) {
  const feed =
    posts && posts.length > 0
      ? { posts, source: source ?? ("fallback" as const) }
      : await getInstagramPosts(6);

  return (
    <div className={styles.container}>
      <Link
        href="https://www.instagram.com/mcnsistemas/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.profile}
      >
        <Instagram size={22} />
        @mcnsistemas
      </Link>

      <div className={styles.grid}>
        {feed.posts.map((post) => (
          <Link
            key={post.id}
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.post}
          >
            <Image
              src={post.imageUrl}
              alt={post.caption}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 50vw, 33vw"
              unoptimized
            />
            <div className={styles.overlay}>
              <Instagram size={28} color="white" />
              <p className={styles.caption}>{post.caption}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.cta}>
        <Link
          href="https://www.instagram.com/mcnsistemas/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mcn btn-mcn-outline"
        >
          <Instagram size={18} />
          Ver mais no Instagram
        </Link>
      </div>
    </div>
  );
}

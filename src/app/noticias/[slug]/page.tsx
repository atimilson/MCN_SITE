import { BlogProps } from "@/utils/blog.type";
import Image from "next/image";
import Link from "next/link";
import { getItemBySlug } from "@/utils/actions/get-data";
import { ArrowLeft } from "lucide-react";

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Data indisponível";
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return "Data indisponível";
  }
}

export default async function Details({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: BlogProps = await getItemBySlug(slug);
  const post = objects[0];
  const formattedDate = formatDate(post.published_at);

  return (
    <article className="container py-5">
      <Link
        href="/noticias"
        className="d-inline-flex align-items-center gap-2 mb-4 text-mcn-muted"
        style={{ fontWeight: 500, fontSize: "0.95rem" }}
      >
        <ArrowLeft size={18} /> Voltar para notícias
      </Link>

      <header className="text-center mb-4" style={{ maxWidth: 820, margin: "0 auto 1.5rem" }}>
        <h1
          className="text-mcn-navy mb-3"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          {post.title}
        </h1>
        <p className="text-mcn-muted mb-0" style={{ fontSize: "0.95rem" }}>
          {formattedDate}
          {post.metadata?.posts?.autor
            ? ` · Por ${post.metadata.posts.autor}`
            : null}
        </p>
      </header>

      <div
        className="position-relative mx-auto mb-4 overflow-hidden"
        style={{
          maxWidth: 920,
          aspectRatio: "16/9",
          borderRadius: 16,
          background: "#e2e8f0",
        }}
      >
        <Image
          src={post.metadata.capa.url}
          alt={post.title}
          fill
          quality={90}
          className="object-fit-cover"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 992px) 100vw, 920px"
          priority
        />
      </div>

      <div className="mcn-prose">
        <p className="lh-lg">{post.metadata.posts.descricao}</p>
      </div>
    </article>
  );
}

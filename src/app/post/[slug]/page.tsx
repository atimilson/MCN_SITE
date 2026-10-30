import { permanentRedirect } from "next/navigation";

/** Rota legada: mantém links antigos funcionando. */
export default function LegacyPost({ params }: { params: { slug: string } }) {
  permanentRedirect(`/noticias/${params.slug}`);
}

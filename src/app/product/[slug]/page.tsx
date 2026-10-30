import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/solution-detail";
import { getDataProduct, getProductBySlug, safe } from "@/utils/actions/get-data";
import type { ProductProps } from "@/utils/product.type";
import { splitTitle, truncate } from "@/lib/content";

type Params = { params: { slug: string } };

async function load(slug: string) {
  const data = await safe<ProductProps | null>(getProductBySlug(slug), null);
  return data?.objects?.[0] ?? null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = await load(params.slug);
  if (!product) return { title: "Solução não encontrada" };
  return {
    title: splitTitle(product.title).main,
    description: truncate(product.metadata?.descricao || product.title, 160),
    openGraph: product.metadata?.capa?.url ? { images: [product.metadata.capa.url] } : undefined,
  };
}

export default async function ProductPage({ params }: Params) {
  const [product, all] = await Promise.all([
    load(params.slug),
    safe<ProductProps>(getDataProduct(), { objects: [] }),
  ]);
  if (!product) notFound();

  return (
    <SolutionDetail
      item={product}
      kind="solucao"
      related={all.objects.filter((p) => p.slug !== product.slug)}
    />
  );
}

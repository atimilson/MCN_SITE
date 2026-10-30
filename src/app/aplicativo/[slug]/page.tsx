import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/solution-detail";
import { getAppBySlug, getDataApp, safe } from "@/utils/actions/get-data";
import type { AppProps } from "@/utils/aplicativo.type";
import { isSvg, splitTitle, truncate } from "@/lib/content";

type Params = { params: { slug: string } };

async function load(slug: string) {
  const data = await safe<AppProps | null>(getAppBySlug(slug), null);
  return data?.objects?.[0] ?? null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const app = await load(params.slug);
  if (!app) return { title: "Aplicativo não encontrado" };
  const cover = app.metadata?.capa?.url;
  return {
    title: splitTitle(app.title).main,
    description: truncate(
      app.metadata?.descricao || `${app.title} — aplicativo integrado ao ERP MCN.`,
      160
    ),
    openGraph: cover && !isSvg(cover) ? { images: [cover] } : undefined,
  };
}

export default async function AplicativoPage({ params }: Params) {
  const [app, all] = await Promise.all([
    load(params.slug),
    safe<AppProps>(getDataApp(), { objects: [] }),
  ]);
  if (!app) notFound();

  return (
    <SolutionDetail
      item={app}
      kind="aplicativo"
      related={all.objects.filter((a) => a.slug !== app.slug)}
    />
  );
}

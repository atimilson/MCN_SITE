import { getDataApp, getDataProduct, safe } from "@/utils/actions/get-data";
import type { ProductProps } from "@/utils/product.type";
import type { AppProps } from "@/utils/aplicativo.type";
import { splitTitle } from "@/lib/content";
import { NavBar, type NavItem } from "./navbar";

export async function Header() {
  const [products, apps] = await Promise.all([
    safe<ProductProps>(getDataProduct(), { objects: [] }),
    safe<AppProps>(getDataApp(), { objects: [] }),
  ]);

  const toItem =
    (base: string) =>
    (o: { slug: string; title: string }): NavItem => {
      const { main, sub } = splitTitle(o.title);
      return { slug: o.slug, href: `${base}/${o.slug}`, title: main, sub };
    };

  return (
    <NavBar
      products={products.objects.map(toItem("/product"))}
      apps={apps.objects.map(toItem("/aplicativo"))}
    />
  );
}

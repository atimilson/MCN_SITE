import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { RevendaProps } from "@/utils/revenda";
import { getDataRevenda } from "@/utils/actions/get-data";
import { Revenda } from "@/components/revenda";

export const metadata: Metadata = {
  title: "Revenda autorizada",
  description: "Parceiros e revendas autorizadas da MCN Sistemas.",
};

export default async function RevendaAutorizada() {
  const data: { objects: RevendaProps["objects"] } = await getDataRevenda();

  return (
    <>
      <Hero
        title="Revenda autorizada"
        eyebrow="Parceiros"
        banner="/assets/images/banner-revenda.jpg"
      />
      <section className="page-section page-section--muted">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Nossas revendas</h2>
            <div className="section-underline" />
            <p className="section-lead">
              Empresas parceiras autorizadas a comercializar a MCN
            </p>
          </div>

          {data.objects.length > 0 ? (
            <Revenda objects={data.objects} />
          ) : (
            <div className="text-center p-5 mcn-card">
              <p className="text-mcn-muted fs-5 mb-0">
                No momento não há empresas parceiras listadas. Volte em breve.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

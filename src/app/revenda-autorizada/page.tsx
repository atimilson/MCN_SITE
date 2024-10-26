import { Hero } from "@/components/hero";
import { RevendaProps } from "@/utils/revenda";
import { getDataRevenda } from "@/utils/actions/get-data";
import { Revenda } from "@/components/revenda";

export default async function revendaAutorizada() {
    const data: { objects: RevendaProps["objects"] } = await getDataRevenda();

    return (
        <>
            <Hero
                title="Revenda Autorizada"
                banner="/assets/images/banner-revenda.jpg"
            />
            <section className="p-md-5 p-3 container">
                <h1 className="section-title mb-5">Revenda Autorizada</h1>
                <Revenda objects={data.objects} />
            </section>
        </>
    );
}

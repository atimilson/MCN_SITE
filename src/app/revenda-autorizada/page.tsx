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

                {data.objects.length > 0 ? (
                    <Revenda objects={data.objects} />
                ) : (
                    <div className="text-center p-5">
                        <p className="text-muted fs-5">
                            No momento, não há empresas parceiras registradas. Por favor, volte mais tarde para conferir as atualizações.
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}


import { ProductProps } from "@/utils/product.type";
import Image from "next/image";
import { getProductBySlug } from "@/utils/actions/get-data";



export default async function Products({ params: { slug } }: { params: { slug: string } }) {

    const { objects }: ProductProps = await getProductBySlug(slug)


    return (
        <div className="container p-md-5 p-3">
            <h1 className="mb-4">{objects[0].title}</h1>
            <div className="text-center">

                <Image
                    src={objects[0].metadata.capa.url}
                    alt={objects[0].slug}
                    quality={100}
                    width={1200}
                    height={800}
                    className="img-fluid"
                />
            </div>
            <section>
                <article>


                    <p className="lh-lg">{objects[0].metadata.descricao}</p>
                </article>
            </section>
        </div>
    )
}

import { BlogProps } from "@/utils/blog.type"
import Image from "next/image";
import { getItemBySlug } from "@/utils/actions/get-data";

const formatDate = (dateString: string): string => {
    try {
        // Cria um objeto Date a partir da string
        const date = new Date(dateString);

        // Verifica se a data é inválida
        if (isNaN(date.getTime())) {
            throw new Error('Data inválida');
        }

        // Configurações para o formato brasileiro
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };

        // Retorna a data formatada
        return new Intl.DateTimeFormat('pt-BR', options).format(date);
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return 'Data inválida'; // Retorna uma mensagem de erro ou uma string padrão
    }
};




export default async function Details({ params: { slug } }: { params: { slug: string } }) {

    const { objects }: BlogProps = await getItemBySlug(slug)

    const formattedDate = formatDate(objects[0].published_at);

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
                    <div className="mt-3 ">
                        <p className="fw-bold">Postado em: {formattedDate}</p>
                        <p className="fw-bold">Postado por: {objects[0].metadata.posts.autor}</p>
                    </div>

                    <p className="lh-lg">{objects[0].metadata.posts.descricao}</p>
                </article>
            </section>
        </div>
    )
}
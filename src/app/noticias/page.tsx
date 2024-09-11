import { getDataBlog } from "@/utils/actions/get-data";
import { BlogProps } from "@/utils/blog.type"
import Image from "next/image";
import Link from "next/link";

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

export default async function Noticias() {

    const data: BlogProps = await getDataBlog();

    return (
        <section className="bg-light p-3 p-md-5">
            <div className="container">
                <h4 className="text-center display-5 mb-md-5" data-aos="fade-down">
                    <span className="section-title">Notícias</span>
                </h4>


                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data.objects.map((news) => (
                        <div className="col" key={news.slug}>
                            <div className="card">
                                <Image
                                    src={news.metadata.capa.url}
                                    className="card-img-top"
                                    alt="Imagem de capa do blog"
                                    width={200}
                                    height={280}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {news.title}
                                    </h5>
                                    <p className="card-text">
                                        {truncateText(news.metadata.posts.descricao, 150)}
                                    </p>
                                    <Link href={`/noticias/${news.slug}`}>
                                        <button className="btn btn-outline-dark">Leia mais</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    )
}
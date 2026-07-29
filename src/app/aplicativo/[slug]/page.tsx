import { AppProps } from "@/utils/aplicativo.type";
import Image from "next/image";
import Link from "next/link";
import { getAppBySlug } from "@/utils/actions/get-data";
import { FaWhatsapp } from "react-icons/fa";

export default async function Aplicativo({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: AppProps = await getAppBySlug(slug);
  const app = objects[0];

  return (
    <div className="container py-5">
      <header
        className="text-center mb-4"
        style={{ maxWidth: 820, margin: "0 auto 2rem" }}
      >
        <p
          className="text-mcn-muted mb-2"
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Aplicativo
        </p>
        <h1
          className="text-mcn-navy"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {app.title}
        </h1>
      </header>

      <div
        className="position-relative mx-auto mb-4 overflow-hidden"
        style={{
          maxWidth: 960,
          borderRadius: 16,
          background: "#f1f4f9",
        }}
      >
        <Image
          src={app.metadata.capa.url}
          alt={app.title}
          quality={90}
          width={1200}
          height={800}
          className="img-fluid w-100"
          style={{ display: "block", height: "auto" }}
          priority
        />
      </div>

      <section className="mcn-prose">
        <p className="lh-lg">{app.metadata.descricao}</p>
      </section>

      <div className="text-center mt-5">
        <Link
          href={`https://wa.me/556592695937?text=${encodeURIComponent(
            `Olá! Gostaria de saber mais sobre o aplicativo: ${app.title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mcn btn-mcn-whatsapp"
        >
          <FaWhatsapp size={20} />
          Solicitar informações
        </Link>
      </div>
    </div>
  );
}

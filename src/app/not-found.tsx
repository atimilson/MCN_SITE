import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/site";

export default function NotFound() {
  return (
    <main
      className="section--ink grid-bg"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "calc(var(--header-h) + 80px) 0 80px",
        textAlign: "center",
      }}
    >
      <div className="container on-dark" style={{ display: "grid", justifyItems: "center", gap: 20 }}>
        <span className="eyebrow">Erro 404</span>
        <p
          className="text-gradient"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(6rem, 22vw, 14rem)",
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
          }}
        >
          404
        </p>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>Página não encontrada</h1>
        <p style={{ maxWidth: 480 }}>
          O conteúdo que você procura pode ter mudado de endereço. Volte ao início ou fale com a
          nossa equipe.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 12 }}>
          <Link href="/" className="btn btn--primary">
            <ArrowLeft size={18} /> Voltar ao início
          </Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--glass">
            <FaWhatsapp size={18} /> Falar com a MCN
          </a>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Youtube } from "lucide-react";
import { Hero } from "@/components/hero";
import { VideoGallery } from "@/components/video-gallery";
import CTASection from "@/components/cta-section";
import { getDataCategoriasvideo, safe } from "@/utils/actions/get-data";
import type { videoProps } from "@/utils/video.type";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vídeos e tutoriais",
  description: "Tutoriais e conteúdos do canal MCN Software no YouTube.",
};

export default async function Videos() {
  const categories = await safe<videoProps | null>(getDataCategoriasvideo(), null);

  return (
    <main>
      <Hero
        eyebrow="Canal MCN"
        breadcrumbs={[{ label: "Vídeos" }]}
        title={
          <>
            Aprenda a usar o <span className="text-gradient">sistema MCN</span>
          </>
        }
        description="Tutoriais em vídeo para tirar o máximo de cada recurso — direto do nosso canal no YouTube."
      >
        <a
          href={SITE.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ color: "#fff", background: "#ff0033", boxShadow: "0 10px 24px -10px rgba(255,0,51,.7)" }}
        >
          <Youtube size={20} /> Inscreva-se no canal
        </a>
      </Hero>

      <section className="section">
        <div className="container">
          <VideoGallery categories={categories?.objects ?? []} />
        </div>
      </section>

      <CTASection
        title={
          <>
            Ficou com <span className="text-gradient">alguma dúvida</span>?
          </>
        }
        text="Nosso suporte está pronto para ajudar. Fale com a gente pelo WhatsApp ou telefone."
        message="Olá! Assisti aos tutoriais e tenho uma dúvida sobre o sistema MCN."
      />
    </main>
  );
}

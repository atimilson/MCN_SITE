import type { Metadata } from "next";
import { getDataCategoriasvideo } from "@/utils/actions/get-data";
import { videoProps } from "@/utils/video.type";
import { FaYoutube } from "react-icons/fa";
import { VideoGallery } from "@/components/video-gallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vídeos",
  description: "Tutoriais e conteúdos do canal MCN Software no YouTube.",
};

export default async function Videos() {
  let categories: videoProps | null = null;

  try {
    categories = await getDataCategoriasvideo();
  } catch {
    categories = null;
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="section-title">Vídeos</h1>
          <div className="section-underline" />
          <p className="section-lead">
            Tutoriais e conteúdos do canal MCN Software
          </p>
          <a
            href="https://www.youtube.com/@McnSoftware1731"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytBtn}
          >
            <FaYoutube size={22} />
            Visite nosso canal no YouTube
          </a>
        </header>

        <VideoGallery categories={categories?.objects ?? []} />
      </div>
    </div>
  );
}

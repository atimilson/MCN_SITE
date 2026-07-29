import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { Testimonials } from "@/components/testimonials";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import CTASection from "@/components/cta-section";
import SegmentsSection from "@/components/segments-section";
import SimpleInstagramFeed from "@/components/instagram/simple";
import { getInstagramPosts } from "@/utils/actions/get-instagram-posts";
import styles from "./page.module.css";

export default async function Home() {
  const [{ object }, instagram] = await Promise.all([
    getDataHome(),
    getInstagramPosts(6),
  ]);

  return (
    <main>
      <Carousel object={object} />
      <SegmentsSection />
      <CTASection />

      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionHeader} data-aos="fade-down">
            <h2 className="section-title">Depoimentos</h2>
            <div className="section-underline" />
            <p className="section-lead">
              Quem usa a MCN recomenda no dia a dia da loja
            </p>
          </div>
          <Testimonials object={object} />
        </div>
      </section>

      <section className={styles.instagramSection}>
        <div className="container">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 className="section-title">Instagram</h2>
            <div className="section-underline" />
          </div>
          <SimpleInstagramFeed posts={instagram.posts} source={instagram.source} />
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container text-center">
          <h2 className="section-title">Fale conosco</h2>
          <div className="section-underline" />
          <p className="section-lead">
            Estamos prontos para atender sua empresa
          </p>
          <div className={styles.contactButtons}>
            <Link
              href="tel:6530544338"
              className={styles.phoneBtn}
              data-aos="fade-up"
            >
              <PhoneCall size={20} /> (65) 3054-4338
            </Link>
            <Link
              href="tel:6530544339"
              className={styles.phoneBtn}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <PhoneCall size={20} /> (65) 3054-4339
            </Link>
            <Link
              href="/contato"
              className="btn-mcn btn-mcn-primary"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Enviar mensagem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

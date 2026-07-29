import styles from "./styles.module.css";
import Image from "next/image";

interface HeroProps {
  title: string;
  banner: string;
  eyebrow?: string;
}

export function Hero({ title, banner, eyebrow }: HeroProps) {
  return (
    <section className={styles.main} aria-label={title}>
      <div className={styles.containerHero}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.contentBanner}>
        <div className={styles.overlay} />
        <Image
          alt={title}
          src={banner}
          priority
          quality={90}
          fill
          className={styles.banner}
          sizes="100vw"
        />
      </div>
    </section>
  );
}

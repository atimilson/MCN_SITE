import styles from './styles.module.css'
import Image from 'next/image';

interface HeroProps {
    title: string;
    banner: string
}



export function Hero({ title, banner }: HeroProps) {
    console.log(banner)
    return (
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.contentBanner}>
                <Image alt={title} src={banner} priority={true} quality={100} fill={true} className={styles.banner} />
            </div>
        </main>
    )
}
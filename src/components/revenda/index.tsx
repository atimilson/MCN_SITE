import { RevendaProps } from "@/utils/revenda";
import Image from "next/image";
import styles from "./styles.module.css";

export function Revenda({ objects }: RevendaProps) {
  return (
    <div className={styles.list}>
      {objects.map((object) =>
        object.metadata.revenda.map((item) => (
          <article className={styles.card} key={item.empresa}>
            <div className={styles.media}>
              <Image
                src={item.image.url}
                alt={item.empresa}
                fill
                className={styles.image}
                sizes="220px"
              />
            </div>
            <div className={styles.body}>
              <h2 className={styles.title}>{item.empresa}</h2>
              {item.contato ? (
                <p className={styles.meta}>{item.contato}</p>
              ) : null}
              {item.email ? (
                <p className={styles.meta}>
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </p>
              ) : null}
              {item.endereco ? (
                <p className={styles.meta}>{item.endereco}</p>
              ) : null}
              {item.site ? (
                <p className={styles.meta}>
                  <a
                    href={
                      item.site.startsWith("http")
                        ? item.site
                        : `https://${item.site}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.site}
                  </a>
                </p>
              ) : null}
            </div>
          </article>
        ))
      )}
    </div>
  );
}

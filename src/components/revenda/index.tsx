import Image from "next/image";
import { Globe, Mail, MapPin, UserRound } from "lucide-react";
import { RevendaProps } from "@/utils/revenda";
import styles from "./styles.module.css";

export function Revenda({ objects }: RevendaProps) {
  const items = objects.flatMap((o) => o.metadata?.revenda ?? []);

  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <article
          className={styles.card}
          key={`${item.empresa}-${i}`}
          data-reveal
          style={{ "--d": `${(i % 3) * 90}ms` } as React.CSSProperties}
        >
          <div className={styles.media}>
            {item.image?.url ? (
              <Image src={item.image.url} alt={item.empresa} fill className={styles.image} sizes="120px" />
            ) : (
              <span>{item.empresa?.charAt(0)}</span>
            )}
          </div>
          <h2 className={styles.title}>{item.empresa}</h2>
          <ul className={styles.meta}>
            {item.contato ? (
              <li>
                <UserRound size={16} /> {item.contato}
              </li>
            ) : null}
            {item.email ? (
              <li>
                <Mail size={16} /> <a href={`mailto:${item.email}`}>{item.email}</a>
              </li>
            ) : null}
            {item.endereco ? (
              <li>
                <MapPin size={16} /> {item.endereco}
              </li>
            ) : null}
            {item.site ? (
              <li>
                <Globe size={16} />
                <a
                  href={item.site.startsWith("http") ? item.site : `https://${item.site}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.site.replace(/^https?:\/\//, "")}
                </a>
              </li>
            ) : null}
          </ul>
        </article>
      ))}
    </div>
  );
}

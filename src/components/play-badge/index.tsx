import { FaGooglePlay } from "react-icons/fa";
import styles from "./styles.module.css";

type Props = {
  href: string;
  /** Nome do app, usado no aria-label */
  name: string;
  className?: string;
};

/** Botão "Disponível no Google Play". */
export function PlayBadge({ href, name, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.badge} ${className}`}
      aria-label={`Baixar ${name} no Google Play`}
    >
      <FaGooglePlay size={22} aria-hidden />
      <span>
        <small>Disponível no</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}

/** Versão compacta: ícone do Play + nome do app. */
export function PlayLink({ href, name, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${className}`}
      aria-label={`Baixar ${name} no Google Play`}
    >
      <FaGooglePlay size={16} aria-hidden />
      <span>
        <strong>{name}</strong>
        <small>Google Play</small>
      </span>
    </a>
  );
}

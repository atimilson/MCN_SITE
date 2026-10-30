import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  ChartColumnIncreasing,
  Headphones,
  Receipt,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { waLink } from "@/lib/site";
import styles from "./platform.module.css";

const ITEMS = [
  {
    icon: Receipt,
    title: "Fiscal sempre em dia",
    text: "Emissão de notas, TEF integrado e regras atualizadas, com contador tributarista na equipe.",
  },
  {
    icon: Boxes,
    title: "Estoque sob controle",
    text: "Contagem pelo celular, relatório de divergências, rupturas, lotes e endereçamento.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "BI em tempo real",
    text: "Faturamento, ticket médio e vendas diárias em painéis que se atualizam sozinhos.",
  },
  {
    icon: Smartphone,
    title: "Vendas externas",
    text: "App mobile com catálogo, histórico do cliente e pedido enviado pelo WhatsApp.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce integrado",
    text: "Loja virtual conectada a mais de 70 marketplaces, com estoque e preço do ERP.",
  },
  {
    icon: Headphones,
    title: "Suporte que entende",
    text: "Atendimento próximo por telefone, WhatsApp e acesso remoto, com quem conhece o seu ramo.",
  },
];

/** 2. O que resolve — capacidades da plataforma e uma ilustração de apoio. */
export function Platform() {
  return (
    <section className="section section--paper">
      <div className={`container ${styles.layout}`}>
        <header className={styles.intro} data-reveal>
          <span className="eyebrow">A plataforma</span>
          <h2 className="h2">
            Tudo o que a operação precisa, <span className="text-gradient">num só lugar</span>
          </h2>
          <p className="lead">
            Caixa, estoque, fiscal e gestão conversando entre si. Menos planilha, menos retrabalho
            e mais controle sobre a margem.
          </p>
          <a
            href={waLink("Olá! Quero ver a plataforma MCN funcionando.")}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            Ver funcionando na prática <ArrowRight size={16} />
          </a>
          <div className={styles.illustration} aria-hidden="true">
            <Image
              src="/assets/images/home/plataforma-integrada.webp"
              alt=""
              width={768}
              height={512}
              sizes="(max-width: 600px) 260px, 340px"
              className={styles.image}
            />
          </div>
        </header>

        <ul className={styles.list}>
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className={styles.item}
                data-reveal
                style={{ "--d": `${(i % 2) * 80}ms` } as React.CSSProperties}
              >
                <span className={styles.icon}>
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

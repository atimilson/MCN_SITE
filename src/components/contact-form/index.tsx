"use client";

import { FormEvent, useState } from "react";
import { CircleCheck, CircleAlert, Send } from "lucide-react";
import { waLink } from "@/lib/site";
import styles from "./styles.module.css";

const SUBJECTS = [
  "Quero uma demonstração",
  "Orçamento",
  "Suporte técnico",
  "Seja um revendedor",
  "Outro assunto",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const assunto = String(data.get("assunto") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    if (!nome || !email || !mensagem) {
      setStatus("error");
      return;
    }

    const text = [
      `*Contato pelo site MCN*`,
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      telefone ? `Telefone: ${telefone}` : null,
      empresa ? `Empresa: ${empresa}` : null,
      assunto ? `Assunto: ${assunto}` : null,
      ``,
      mensagem,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setStatus("ok");
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid2}>
        <div className="field">
          <label htmlFor="nome">Nome *</label>
          <input id="nome" name="nome" type="text" className="input" placeholder="Seu nome" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" className="input" placeholder="Nome da empresa" autoComplete="organization" />
        </div>
      </div>

      <div className={styles.grid2}>
        <div className="field">
          <label htmlFor="email">E-mail *</label>
          <input id="email" name="email" type="email" className="input" placeholder="seu@email.com" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" className="input" placeholder="(65) 00000-0000" autoComplete="tel" />
        </div>
      </div>

      <fieldset className={styles.subjects}>
        <legend>Assunto</legend>
        <div>
          {SUBJECTS.map((s, i) => (
            <label key={s} className={styles.subject}>
              <input type="radio" name="assunto" value={s} defaultChecked={i === 0} />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="mensagem">Mensagem *</label>
        <textarea id="mensagem" name="mensagem" className="input" rows={5} placeholder="Conte um pouco sobre a sua empresa e o que você precisa" required />
      </div>

      <div className={styles.actions}>
        <button type="submit" className="btn btn--primary btn--lg">
          Enviar pelo WhatsApp <Send size={18} className="arrow" />
        </button>
        {status === "ok" && (
          <p className={styles.success} role="status">
            <CircleCheck size={18} /> WhatsApp aberto! Finalize o envio por lá.
          </p>
        )}
        {status === "error" && (
          <p className={styles.error} role="alert">
            <CircleAlert size={18} /> Preencha nome, e-mail e mensagem.
          </p>
        )}
      </div>
    </form>
  );
}

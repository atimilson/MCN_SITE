"use client";

import { FormEvent, useState } from "react";
import styles from "./styles.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const assunto = String(data.get("assunto") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    if (!nome || !email || !mensagem) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const text = [
      `*Contato pelo site MCN*`,
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      telefone ? `Telefone: ${telefone}` : null,
      assunto ? `Assunto: ${assunto}` : null,
      ``,
      mensagem,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/556592695937?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("ok");
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="nome">Nome *</label>
          <input
            id="nome"
            name="nome"
            type="text"
            className="form-control"
            placeholder="Seu nome completo"
            required
          />
        </div>
      </div>

      <div className={styles.grid3}>
        <div className={styles.field}>
          <label htmlFor="email">E-mail *</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="seu@email.com"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="assunto">Assunto</label>
          <input
            id="assunto"
            name="assunto"
            type="text"
            className="form-control"
            placeholder="Assunto da mensagem"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            className="form-control"
            placeholder="(65) 00000-0000"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="mensagem">Mensagem *</label>
        <textarea
          id="mensagem"
          name="mensagem"
          className="form-control"
          rows={5}
          placeholder="Como podemos ajudar?"
          required
        />
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className="btn-mcn btn-mcn-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Abrindo WhatsApp..." : "Enviar via WhatsApp"}
        </button>
        {status === "ok" && (
          <p className={styles.success}>
            WhatsApp aberto! Complete o envio por lá.
          </p>
        )}
        {status === "error" && (
          <p className={styles.error}>
            Preencha nome, e-mail e mensagem para continuar.
          </p>
        )}
      </div>
    </form>
  );
}

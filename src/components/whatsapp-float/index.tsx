"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function WhatsAppFloat() {
  const phoneNumber = "556592695937";
  const message = "Olá! Gostaria de mais informações sobre os sistemas MCN.";

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      try {
        window.fbq("track", "Contact", {
          content_name: "WhatsApp Button Click",
          content_category: "Contact",
          source: "whatsapp_float_button",
        });
        window.fbq("track", "Lead", {
          content_name: "WhatsApp Contact Initiated",
          source: "website_whatsapp_button",
        });
        window.fbq("trackCustom", "WhatsAppClick", {
          button_location: "floating_button",
          contact_method: "whatsapp",
        });
      } catch {
        // pixel opcional
      }
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className={styles.whatsappFloat}
      onClick={handleWhatsAppClick}
      aria-label="Falar no WhatsApp com a MCN Sistemas"
      title="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={32} color="white" aria-hidden />
      <span className={styles.tooltip}>Fale conosco</span>
    </button>
  );
}

"use client"
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

export function WhatsAppFloat() {
  const phoneNumber = "+5565992011454";
  const message = "Olá! Gostaria de mais informações sobre os sistemas MCN.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.whatsappFloat} onClick={handleWhatsAppClick}>
      <FaWhatsapp size={44} color="white" />
    </div>
  );
} 
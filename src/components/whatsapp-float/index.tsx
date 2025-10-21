"use client"
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";
// Declaração de tipo para o Facebook Pixel
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function WhatsAppFloat() {
  const phoneNumber = "+556592695937";
  const message = "Olá! Gostaria de mais informações sobre os sistemas MCN.";
  
  const handleWhatsAppClick = () => {
    // Emite eventos para o Facebook Pixel ANTES de abrir o WhatsApp
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        // Evento de Contact (importante para tracking)
        window.fbq('track', 'Contact', {
          content_name: 'WhatsApp Button Click',
          content_category: 'Contact',
          source: 'whatsapp_float_button',
          value: 1,
          currency: 'BRL'
        });
        
        // Evento de Lead (crucial para campanhas de conversão)
        window.fbq('track', 'Lead', {
          content_name: 'WhatsApp Contact Initiated',
          source: 'website_whatsapp_button',
          value: 1,
          currency: 'BRL'
        });
        
        // Evento customizado para tracking específico
        window.fbq('trackCustom', 'WhatsAppClick', {
          button_location: 'floating_button',
          contact_method: 'whatsapp',
          phone_number: phoneNumber
        });
        
        console.log('✅ Facebook Pixel: Eventos WhatsApp enviados com sucesso!');
      } catch (error) {
        console.error('❌ Erro ao enviar eventos Facebook Pixel:', error);
      }
    } else {
      console.warn('⚠️ Facebook Pixel não encontrado - fbq não disponível');
    }
    
    // Pequeno delay para garantir que os eventos sejam enviados
    setTimeout(() => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }, 100);
  };

  return (
    <div className={styles.whatsappFloat} onClick={handleWhatsAppClick}>
      <button style={{backgroundColor: '#25D366', borderRadius: '50%', padding: '10px', width: '60px', height: '60px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <FaWhatsapp size={44} color="white" />
      </button>
    </div>
  );
} 
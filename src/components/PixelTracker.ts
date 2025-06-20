"use client"
import { useEffect, useRef } from "react";

const PixelTracker = () => {
    const initialized = useRef(false);
    
    useEffect(() => {
      const pixelId = "1731742927464023";
      
      // Verifica se já foi inicializado para evitar duplicação
      if (initialized.current) {
        return;
      }
      
      // Verifica se o fbq já existe no window
      if (typeof window !== 'undefined' && (window as any).fbq) {
        console.log('Facebook Pixel já está carregado');
        return;
      }
      
      // Carrega o script do Facebook Pixel apenas uma vez
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      
      script.onload = () => {
        // Inicializa o pixel após o script carregar
        if ((window as any).fbq) {
          (window as any).fbq('init', pixelId);
          (window as any).fbq('track', 'PageView');
        }
      };
      
      // Inicializa a função fbq antes do script carregar
      (window as any).fbq = (window as any).fbq || function() {
        ((window as any).fbq.q = (window as any).fbq.q || []).push(arguments);
      };
      (window as any).fbq.l = +new Date();
      
      document.head.appendChild(script);
      initialized.current = true;
      
    }, []);
    
    return null;
  };
  
  export default PixelTracker;
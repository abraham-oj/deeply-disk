import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      
        href="https://wa.me/5212228762812?text=Hola,%20necesito%20información%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-bold hidden md:inline">¿Necesita ayuda?</span>
        
        <span className="absolute -inset-1 bg-green-500 rounded-full animate-ping opacity-75 pointer-events-none" aria-hidden="true"></span>
      </a>
    </div>
  );
}

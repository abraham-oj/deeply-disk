import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5212227050257"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-200"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-bold hidden md:inline">Contactanos</span>
      </a>
    </div>
  );
}
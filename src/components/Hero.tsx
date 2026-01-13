import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495573468087-578f564be65e?q=80&w=2070&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
        <div className="animate-fade-in-up">
          <p className="text-gold-500 text-lg md:text-xl tracking-[0.5em] uppercase font-light mb-6">
            Honor, Dignidad y Respeto
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Funeraria{' '}
            <span className="text-gold-gradient">
              De Jesús
            </span>
          </h1>
          
          <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light">
            Más de 18 años brindando paz y certeza legal a las familias poblanas.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#planes"
              className="bg-gradient-to-r from-gold-600 to-gold-500 text-black px-8 py-4 rounded-full font-bold hover:from-gold-500 hover:to-gold-400 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Ver Planes a Futuro
            </a>
            <a 
              href="tel:+522222576534"
              className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-full font-bold hover:bg-gold-500 hover:text-black transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Solicitar Ayuda Inmediata
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold-500" />
      </div>
    </section>
  );
}

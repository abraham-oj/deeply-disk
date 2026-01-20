import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">
            Estamos Para Servirle
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Contacto
          </h2>
          <div className="h-1 w-24 bg-gold-500 mt-4 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">Teléfonos</h3>
                  <a href="tel:+522226173851" className="text-gold-500 text-2xl font-bold block hover:text-gold-400">
                    222 617 3851
                  </a>
                  <p className="text-slate-400 text-sm mt-1">Emergencias 24/7</p>
                  <div className="mt-3 space-y-1 text-slate-400">
                    <p>Oficina: 221-204-7758</p>
                    <p>Alt: 222-804-9568</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">Dirección</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Av. Juan de Palafox y Mendoza <strong className="text-white">2616-A</strong><br />
                    Col. Resurgimiento<br />
                    72380 Puebla, Pue.
                  </p>
                  <p className="text-gold-500 text-sm mt-2">A 5 minutos del Centro y frente a la Unidad Deportiva del Parque Ecoloco</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">Horario</h3>
                  <p className="text-slate-300">Atención las <strong className="text-gold-500">24 horas</strong></p>
                  <p className="text-slate-400 text-sm mt-1">Los 365 días del año</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">Correos</h3>
                  <a href="mailto:ventas@serviciosfunerariosdejesus.com.mx" className="text-gold-500 hover:text-gold-400 block text-sm">
                    aqui-pensar-si-pagan@correo.ono
                  </a>
                  <a href="mailto:dejesuserviciosfunerarios23@gmail.com" className="text-slate-400 hover:text-gold-400 block text-sm mt-1">
                    noseveprofesionaluncorreogmail
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61551069742912" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-full border border-slate-700 hover:border-gold-500 transition-all group"
              >
                <Facebook className="w-6 h-6 text-slate-400 group-hover:text-gold-500" />
              </a>
              <a 
                href="https://www.facebook.com/share/v/17xXeLYzsS/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-full border border-slate-700 hover:border-gold-500 transition-all group"
              >
                <Instagram className="w-6 h-6 text-slate-400 group-hover:text-gold-500" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4267289842545!2d-98.1977!3d19.0419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0c5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAv.%20Juan%20de%20Palafox%20y%20Mendoza%202616%2C%20Resurgimiento%2C%2072380%20Puebla%2C%20Pue.!5e0!3m2!1ses!2smx!4v1234567890"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy"
              title="Ubicación Funeraria De Jesús"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

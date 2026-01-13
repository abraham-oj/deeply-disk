import React from 'react';
import { Flame, Shield, Truck, Church, FileText, Globe } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Cremación Certificada',
    description: 'Contamos con horno crematorio propio dentro de nuestras instalaciones, garantizando un proceso digno y transparente.',
    features: ['Horno propio', 'Urnas incluidas', 'Certificados oficiales']
  },
  {
    icon: Church,
    title: 'Capillas de Velación',
    description: 'Espacios amplios y confortables para despedir a su ser querido con la calidez que merece.',
    features: ['Servicio de cafetería', 'Clima controlado', 'Estacionamiento']
  },
  {
    icon: Shield,
    title: 'Planes a Futuro',
    description: 'Proteja a su familia de gastos inesperados. Planes congelados desde $596 mensuales.',
    features: ['100% transferibles', 'Mensualidades fijas', 'Sin incrementos']
  },
  {
    icon: Truck,
    title: 'Traslados Nacionales',
    description: 'Logística integral para traslados dentro y fuera del país con todos los permisos necesarios.',
    features: ['Nacionales e internacionales', 'Documentación incluida', 'Coordinación total']
  },
  {
    icon: FileText,
    title: 'Trámites Legales',
    description: 'Gestionamos todos los documentos ante Registro Civil y autoridades competentes.',
    features: ['Acta de defunción', 'Certificados médicos', 'Asesoría legal']
  },
  {
    icon: Globe,
    title: 'Convenios Especiales',
    description: 'Descuentos exclusivos para afiliados Audi y tarjetahabientes INAPAM.',
    features: ['Audi', 'INAPAM', 'Beneficios adicionales']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">
            Soluciones Integrales
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Nuestros Servicios
          </h2>
          <div className="h-1 w-24 bg-gold-500 mt-4 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-gold-500/50 transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gold-500/30">
                <service.icon className="text-gold-500 w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-serif text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gold-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

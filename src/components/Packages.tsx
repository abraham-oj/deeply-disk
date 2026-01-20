import React from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Aqui deben definir',
    price: '500',
    period: '42 meses',
    total: '$30,000',
    image: 'https://www.casketsbydesign.com/images/coffins/pine-coffin-480x320.webp',
    features: [
      'Ataúd de pino barnizado modelo Clásico',
      'Traslado dentro del área metropolitana',
      'Trámites legales ante Registro Civil',
      'Capilla de velación con cafetería',
      'Embalsamado y arreglo estético',
      'Servicio de cremación o inhumación',
      'Horno crematorio',
      'Urna modelo Clásico incluida',
      'Misa de cuerpo presente',
      '100% transferible',
      'Mensualidades congeladas',
      'Cancelación de saldo pendiente'
    ],
    popular: false
  },
  {
    name: 'nombre raro',
    price: '812',
    period: '42 meses',
    total: '$37,900',
    image: 'https://casketemporium.com/wp-content/uploads/Solid-Wood-008-fotor-2024060616260-1200x864-1.webp',
    features: [
      'Ataúd de pino barnizado modelo Elegante',
      'Traslado dentro del área metropolitana',
      'Trámites legales ante Registro Civil',
      'Capilla de velación con cafetería',
      'Embalsamado y arreglo estético',
      'Servicio de cremación o inhumación',
      'Horno crematorio',
      'Urna modelo Clásico incluida',
      'Misa de cuerpo presente',
      '100% transferible',
      'Mensualidades congeladas',
      'Cancelación de saldo pendiente'
    ],
    popular: true
  },
  {
    name: 'Lujo',
    price: '985',
    period: '42 meses',
    total: '$46,000',
    image: 'https://thumbs.dreamstime.com/b/luxurious-wooden-coffin-open-lid-showcasing-illuminated-plush-interior-lining-luxurious-wooden-coffin-open-lid-413342082.jpg',
    features: [
      'Ataúd de pino barnizado modelo Lujo',
      'Traslado dentro del área metropolitana',
      'Trámites legales ante Registro Civil',
      'Capilla de velación premium con cafetería',
      'Embalsamado y arreglo estético profesional',
      'Servicio de cremación o inhumación',
      'Horno crematorio ecológico propio',
      'Urna modelo Premium incluida',
      'Misa de cuerpo presente',
      '100% transferible',
      'Mensualidades congeladas',
      'Cancelación de saldo pendiente'
    ],
    popular: false
  }
];

export default function Packages() {
  return (
    <section id="planes" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">
            Protección Familiar
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Previsiònes a Futuro
          </h2>
          <div className="h-1 w-24 bg-gold-500 mt-4 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Invierta en tranquilidad. Mensualidades fijas sin incrementos, 100% transferibles.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'border-gold-500 shadow-lg shadow-gold-500/20' : 'border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-600 to-gold-500 text-black px-6 py-1 text-sm font-bold uppercase tracking-wider">
                  Más Popular
                </div>
              )}

              {/* Image */}
              <div className="h-48 overflow-hidden bg-slate-900">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-serif text-white mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 text-sm">desde</span>
                    <span className="text-5xl font-bold text-gold-500">${pkg.price}</span>
                    <span className="text-slate-400 text-sm">mensuales</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">{pkg.period} • Total: {pkg.total}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a 
                  href={`https://wa.me/5212228  762812?text=Hola, me interesa el plan ${pkg.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-full font-bold transition-all ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-black hover:from-gold-500 hover:to-gold-400' 
                      : 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black'
                  }`}
                >
                  Solicitar Cotizacion
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-slate-800/30 border border-slate-700 rounded-xl p-8 text-center"> <p className="text-slate-300 text-lg mb-4"> <strong className="text-gold-500">Beneficio Especial:</strong> Convenios vigentes con Audi y tarjetahabientes INAPAM </p> <div className="flex justify-center items-center gap-12 opacity-70"> <img src="https://i.postimg.cc/s26Z8xLN/Picsart-26-01-08-12-43-05-174.png" alt="Audi" className="h-12 object-contain" /> <img src="https://i.postimg.cc/65vT0YwF/Picsart-26-01-08-12-45-45-901.png" alt="INAPAM" className="h-12 object-contain" /> </div> </div> </div> </section> ); } 

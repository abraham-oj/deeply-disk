import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Familia García',
    text: 'El equipo de Servicios Funerarios de Jesús nos brindó un apoyo invaluable en un momento muy difícil. Su profesionalismo y empatía hicieron que todo el proceso fuera más llevadero. Altamente recomendados.',
    rating: 5
  },
  {
    name: 'María López',
    text: 'Gracias por su atención respetuosa y detallada. Nos sentimos acompañados y tranquilos sabiendo que todo estaba en buenas manos.',
    rating: 5
  },
  {
    name: 'Familia Ramírez',
    text: 'Excelente servicio, instalaciones impecables y personal muy humano. Cumplieron con todo lo prometido y más.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm mb-2">
            Experiencias Reales
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Lo Que Dicen Nuestras Familias
          </h2>
          <div className="h-1 w-24 bg-gold-500 mt-4 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-gold-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-gold-500 font-bold">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

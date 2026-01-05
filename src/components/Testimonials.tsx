import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Andrés M.',
        role: 'Arquitecto',
        text: 'Necesitaba lentes que me ayudaran con tantas horas frente al computador. El examen fue muy profesional y la asesoría de imagen excelente. Me siento más productivo.',
        rating: 5,
    },
    {
        name: 'Valentina R.',
        role: 'Estudiante',
        text: '¡Me encantaron mis gafas nuevas! No sabía qué marco me quedaba bien, pero me dedicaron tiempo para probar varios estilos. El resultado es increíble.',
        rating: 5,
    },
    {
        name: 'Clara S.',
        role: 'Jubilada',
        text: 'Excelente atención. Tienen mucha paciencia para explicar el uso de los progresivos. Veo perfecto de cerca y de lejos. Muy recomendados.',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                        Lo que dicen nuestros pacientes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Historias reales de personas que confiaron su visión en nosotros.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="w-10 h-10 text-brand-gold/40 mb-6" />
                            <p className="text-gray-600 italic mb-6 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="ml-3">
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <span className="text-sm text-gray-500">{t.role}</span>
                                </div>
                                <div className="ml-auto flex text-yellow-400">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

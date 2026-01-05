import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const Hero = () => {
    const bgParallax = useParallax(0.3);
    const cardParallax = useParallax(-0.1);

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-light">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 will-change-transform"
                style={{ transform: `translateY(${bgParallax}px)` }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Óptica S&V Interior"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-sm bg-white/50">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue text-white text-[10px] font-bold">NV</span>
                        <span className="text-sm font-medium text-brand-blue">Nueva Colección 2026 Disponible</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-brand-blue leading-tight tracking-tight">
                        Estilo y Visión <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
                            Personalizada
                        </span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                        Desde la protección visual para profesionales digitales hasta el accesorio de moda perfecto.
                        Descubre una experiencia óptica diseñada para tu estilo de vida.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#method"
                            className="inline-flex justify-center items-center px-8 py-4 bg-brand-blue/90 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg shadow-xl hover:bg-brand-blue hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
                        >
                            Encuentra tu estilo ideal
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex justify-center items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-brand-blue border border-brand-blue/20 font-semibold rounded-lg hover:bg-white transition-all shadow-sm"
                        >
                            Ver Servicios
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-gray-200/60 flex items-center space-x-6">
                        <div className="flex items-center">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden`}>
                                        <span className="text-xs text-gray-500">U{i}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="ml-4">
                                <div className="flex text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">500+</span> Pacientes felices</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Element / Right Side */}
                <div
                    className="hidden md:block relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 will-change-transform"
                    style={{ transform: `translateY(${cardParallax}px) rotate(1deg)` }}
                >
                    {/* Reusing bg for now but imagine a great model shot */}
                    <Image
                        src="/hero-bg.png"
                        alt="Optometrista examinando paciente"
                        layout="fill"
                        objectFit="cover"
                        className="scale-110 hover:scale-100 transition-transform duration-700"
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/40 max-w-xs">
                        <p className="font-semibold text-brand-blue">"Gracias a Óptica S&V, mis gafas ahora son mi accesorio favorito."</p>
                        <p className="text-sm text-gray-500 mt-2">— Valentina, Estudiante de Diseño</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

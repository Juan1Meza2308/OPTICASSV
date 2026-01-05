import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, MousePointer2 } from 'lucide-react'; // Using MousePointer2 as placeholder or custom SVG
import { useParallax } from '@/hooks/useParallax';

const Hero = () => {
    const bgParallax = useParallax(0.2);
    const imageParallax = useParallax(0.15); // Slower, subtle movement for the main image

    // Custom scroll indicator animation
    const [scrollOpacity, setScrollOpacity] = useState(1);
    useEffect(() => {
        const handleScroll = () => {
            const opacity = Math.max(0, 1 - window.scrollY / 300);
            setScrollOpacity(opacity);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-light">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 will-change-transform"
                style={{ transform: `translateY(${bgParallax}px)` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
                {/* We can keep the subtle background texture or remove it if checking specifically for the new image */}
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full min-h-[80vh]">
                {/* Content */}
                <div className="space-y-8 animate-fade-in-up md:pr-8 z-30">

                    <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-sm bg-white/50">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue text-white text-[10px] font-bold">NV</span>
                        <span className="text-sm font-medium text-brand-blue">Nueva Colección 2026 Disponible</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-blue leading-tight tracking-tight">
                        Estilo y Visión <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
                            Personalizada
                        </span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                        Desde la protección visual para profesionales digitales hasta el accesorio de moda perfecto.
                        Descubre una experiencia óptica diseñada para tu estilo de vida.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link
                            href="#contact"
                            className="inline-flex justify-center items-center px-8 py-4 bg-brand-blue/90 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg shadow-xl hover:bg-brand-blue hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
                        >
                            Encuentra tu estilo ideal
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center space-x-6">
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

                {/* Visual Element / Right Side - Integrated Image */}
                {/* Changed from floating card to a more integrated look, perhaps masking into the background or full bleed on right */}
                <div className="hidden md:block relative h-[80vh] w-full z-10">
                    <div
                        className="absolute right-0 top-0 w-full h-full will-change-transform perspective-1000"
                        style={{ transform: `translateY(${imageParallax}px)` }}
                    >
                        {/* Image container with gradient mask for integration */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/hero-model.png"
                                alt="Modelo usando gafas S&V"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Gradient Overlay for integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent mix-blend-overlay"></div>
                        </div>

                        {/* Floating Badge integrated into image area */}
                        <div className="absolute bottom-12 -left-12 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs animate-float">
                            <p className="font-semibold text-brand-blue text-lg">"Diseño y comodidad en perfecto equilibrio."</p>
                            <p className="text-sm text-gray-600 mt-2 font-medium">— Valentina, 24 años</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mouse Scroll Indicator */}
            <div
                className="absolute bottom-10 left-10 md:left-1/2 md:-translate-x-1/2 z-30 flex flex-col items-center animate-bounce duration-[2000ms]"
                style={{ opacity: scrollOpacity }}
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-brand-blue/50 flex justify-center p-2 backdrop-blur-sm bg-white/30">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-scroll-down"></div>
                </div>
                <span className="text-xs text-brand-blue/70 mt-2 font-medium tracking-widest uppercase">Scroll</span>
            </div>

            <style jsx>{`
        @keyframes scroll-down {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll-down {
            animation: scroll-down 1.5s infinite;
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
      `}</style>
        </section>
    );
};

export default Hero;

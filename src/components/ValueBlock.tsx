import React from 'react';
import { Ear, ScanEye, Smile, Gift } from 'lucide-react';

const steps = [
    {
        icon: Ear,
        title: '1. Escucha Activa',
        description: 'Entendemos tus necesidades visuales y rutina diaria.',
    },
    {
        icon: ScanEye,
        title: '2. Examen Digital',
        description: 'Tecnología de precisión para un diagnóstico exacto.',
    },
    {
        icon: Smile,
        title: '3. Asesoría de Imagen',
        description: 'Seleccionamos el marco que realza tus rasgos.',
    },
    {
        icon: Gift,
        title: '4. Entrega Perfecta',
        description: 'Ajuste final y garantía de satisfacción total.',
    },
];

const ValueBlock = () => {
    return (
        <section id="method" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                        Metodología S&V
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Más que una óptica, somos tus asesores de imagen y salud visual.
                        Nuestro proceso garantiza que te veas bien y veas mejor.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl transition-colors duration-300 group cursor-default">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm
                            bg-blue-50 text-brand-blue
                            group-hover:bg-brand-blue/60 group-hover:backdrop-blur-md group-hover:text-white group-hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] group-hover:border group-hover:border-white/20 group-hover:-translate-y-2">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueBlock;

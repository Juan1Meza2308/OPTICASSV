import React from 'react';
import { Monitor, Glasses, Eye, Briefcase } from 'lucide-react';

const services = [
    {
        title: 'Lentes con Filtro Azul',
        description: 'Ideales para profesionales como Andrés. Protege tu vista de pantallas y mejora tu productividad.',
        icon: Monitor,
        price: 'Desde $150.000',
    },
    {
        title: 'Monturas de Diseño',
        description: 'Colecciones exclusivas para quienes buscan estilo, como Valentina. Encuentra el marco perfecto.',
        icon: Glasses,
        price: 'Marcas Premium',
    },
    {
        title: 'Lentes Progresivos',
        description: 'La mejor tecnología para pacientes como Doña Clara. Visión nítida a cualquier distancia.',
        icon: Eye,
        price: 'Tecnología Digital',
    },
    {
        title: 'Salud Visual Corporativa',
        description: 'Convenios para empresas. Cuida la salud visual de tu equipo de trabajo.',
        icon: Briefcase,
        price: 'Planes a medida',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                            Nuestros Servicios
                        </h2>
                        <p className="text-lg text-gray-600">
                            Soluciones ópticas integrales adaptadas a tu estilo de vida y necesidades clínicas.
                        </p>
                    </div>
                    <button className="hidden md:inline-flex mt-4 md:mt-0 items-center justify-center px-6 py-3 border border-brand-teal text-brand-teal font-medium rounded-lg hover:bg-brand-teal hover:text-white transition-colors">
                        Ver Catálogo Completo
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between h-full">
                            <div>
                                <div className="w-12 h-12 bg-teal-50 text-brand-teal rounded-xl flex items-center justify-center mb-6">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-500 mb-6 text-sm">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <span className="text-sm font-semibold text-brand-blue">{service.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-brand-teal text-brand-teal font-medium rounded-lg hover:bg-brand-teal hover:text-white transition-colors">
                        Ver Catálogo Completo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;

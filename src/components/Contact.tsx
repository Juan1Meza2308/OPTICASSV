import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-brand-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Visítanos o agenda tu cita
                        </h2>
                        <p className="text-blue-100/80 text-lg mb-8 max-w-md">
                            Estamos ubicados en el corazón de la ciudad. Ven por tu examen visual o asesoría de imagen sin compromiso.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-brand-teal mt-1 shrink-0" />
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg">Ubicación</h3>
                                    <p className="text-blue-100">Av. Principal #123, Local 4, Centro Comercial Plaza</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-brand-teal mt-1 shrink-0" />
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg">Teléfono / WhatsApp</h3>
                                    <p className="text-blue-100">+57 300 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-brand-teal mt-1 shrink-0" />
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-blue-100">contacto@opticasv.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-brand-teal mt-1 shrink-0" />
                                <div className="ml-4">
                                    <h3 className="font-semibold text-lg">Horario de Atención</h3>
                                    <p className="text-blue-100">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                                    <p className="text-blue-100">Sábados: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a href="#" className="inline-block bg-brand-teal/90 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-brand-teal hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Agendar Cita por WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="relative h-[400px] bg-gray-300 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Integration example: Google Maps Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.98687258925!2d-75.567!3d6.244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMzguNCJOIDc1wrAzNCcwMS4yIlc!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

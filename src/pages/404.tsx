import React from 'react';
import Link from 'next/link';
import { EyeOff, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Custom404() {
    return (
        <div className="min-h-screen flex flex-col bg-brand-light">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-md w-full text-center space-y-8 animate-fade-in-up">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        <EyeOff className="relative w-32 h-32 text-brand-blue mx-auto" strokeWidth={1.5} />
                    </div>

                    <div>
                        <h1 className="text-6xl font-extrabold text-brand-blue tracking-tight">404</h1>
                        <p className="mt-2 text-2xl font-bold text-gray-900 tracking-tight">
                            Parece que perdimos el enfoque
                        </p>
                        <p className="mt-4 text-gray-600">
                            La página que buscas no está disponible o ha sido movida. Regresemos para encontrar tu visión perfecta.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg shadow-lg hover:bg-brand-teal hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

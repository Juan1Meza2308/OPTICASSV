import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-white tracking-tight">
                        Óptica S&V
                    </span>
                    <p className="text-gray-500 text-sm mt-1">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Politica de Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

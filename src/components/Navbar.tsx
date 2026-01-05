import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Glasses } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Método', href: '#method' },
        { name: 'Servicios', href: '#services' },
        { name: 'Testimonios', href: '#testimonials' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="bg-brand-blue p-2 rounded-lg group-hover:bg-brand-teal transition-colors duration-300">
                        <Glasses className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-blue' : 'text-brand-blue'}`}>
                        Óptica S&V
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium hover:text-brand-teal transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800' // Darker text for visibility even on transparent bg if hero is light
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-brand-blue/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-blue/100 border border-white/20 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Agendar Cita
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 hover:text-brand-blue focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-brand-teal font-medium block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-brand-blue text-white px-5 py-2 rounded-lg text-center font-medium hover:bg-brand-teal block"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Agendar Cita
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

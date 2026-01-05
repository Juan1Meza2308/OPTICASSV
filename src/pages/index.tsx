import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueBlock from '@/components/ValueBlock';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Óptica S&V | Estilo y Visión Personalizada</title>
        <meta name="description" content="Óptica S&V. Examen visual computarizado, marcos de diseño y asesoría de imagen personalizada. Cuida tu visión con estilo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <ValueBlock />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

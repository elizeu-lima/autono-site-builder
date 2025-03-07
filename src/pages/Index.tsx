
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Scheduling from '@/components/Scheduling';
import Contact from '@/components/Contact';
import PaymentOption from '@/components/PaymentOption';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio limit={3} />
        <Scheduling />
        <Contact />
        <PaymentOption />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import Contact from '@/components/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Entre em Contato</h1>
            <p className="max-w-md mx-auto text-muted-foreground">
              Estou disponível para responder suas dúvidas e discutir como posso ajudar no seu projeto.
            </p>
          </div>
        </div>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

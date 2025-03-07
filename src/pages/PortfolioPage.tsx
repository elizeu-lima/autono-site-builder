
import Portfolio from '@/components/Portfolio';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Meu Portfólio</h1>
            <p className="max-w-md mx-auto text-muted-foreground">
              Explore meus trabalhos recentes e descubra como posso ajudar a transformar suas ideias em realidade.
            </p>
          </div>
        </div>
        
        <Portfolio />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;

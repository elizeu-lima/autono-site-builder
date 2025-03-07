
import Scheduling from '@/components/Scheduling';
import PaymentOption from '@/components/PaymentOption';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Services from '@/components/Services';

const SchedulingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Agendamento de Serviços</h1>
            <p className="max-w-md mx-auto text-muted-foreground">
              Escolha o serviço desejado, selecione uma data e horário disponíveis para agendar seu atendimento.
            </p>
          </div>
        </div>
        
        <Services />
        <Scheduling />
        <PaymentOption />
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulingPage;


import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[40%] -left-[5%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                Profissional Autônomo de Alta Qualidade
              </p>
              <h1 className="hero-text text-balance">
                Transforme suas ideias em realidade com nossos <span className="text-primary">serviços premium</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                Oferecemos soluções personalizadas de alta qualidade, com foco em resultados 
                excepcionais e atendimento dedicado para cada cliente.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className={cn(
                  "button-hover-effect inline-flex items-center justify-center px-6 py-3 rounded-lg",
                  "bg-primary text-primary-foreground font-medium",
                  "transition-all duration-300 ease-in-out",
                  "hover:shadow-lg focus-ring"
                )}
              >
                Ver Portfólio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/agendamento" 
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-lg",
                  "bg-secondary text-secondary-foreground font-medium",
                  "transition-all duration-300 ease-in-out",
                  "hover:bg-secondary/80 focus-ring"
                )}
              >
                Agendar Serviço
              </Link>
            </div>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">100+</span>
                <span className="text-sm text-muted-foreground">Projetos concluídos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">95%</span>
                <span className="text-sm text-muted-foreground">Clientes satisfeitos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Anos de experiência</span>
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl blur-3xl opacity-30" />
                <div className="relative h-full w-full glass-card rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Profissional trabalhando" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

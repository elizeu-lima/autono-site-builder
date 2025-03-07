
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Profissional qualificado e certificado',
    'Atendimento personalizado às suas necessidades',
    'Compromisso com prazos e entregas',
    'Suporte pós-serviço garantido',
    'Formas de pagamento flexíveis',
    'Orçamento transparente e sem surpresas'
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-secondary blur-3xl opacity-80" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Sobre o profissional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <p className="text-primary-foreground text-center font-medium text-sm">
                  <span className="block text-2xl font-bold">5+</span>
                  Anos de experiência
                </p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Sobre Mim
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Conheça o profissional por trás dos serviços</h2>
            <p className="text-muted-foreground">
              Com mais de 5 anos de experiência no mercado, ofereço soluções personalizadas 
              e de alta qualidade para atender às necessidades específicas de cada cliente. 
              Meu compromisso é com a excelência e a satisfação total de quem confia em meu trabalho.
            </p>
            <p className="text-muted-foreground">
              Sou especializado em diversos serviços, sempre me mantendo atualizado com as 
              últimas tendências e tecnologias para oferecer o melhor aos meus clientes.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

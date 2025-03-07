
import { Lightbulb, Code, BarChart4, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const Services = () => {
  const services: Service[] = [
    {
      id: 'wp',
      title: 'Wordpress',
      description: 'Um desenvolvedor WordPress é um especialista em transformar ideias em sites funcionais e atraentes. Domina PHP, HTML, CSS e JavaScript, personaliza temas, cria plugins e otimiza desempenho, SEO e segurança. Conecta códigos a resultados eficazes.',
      icon: <Lightbulb className="h-5 w-5" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'development',
      title: 'Desenvolvimento Web',
      description: 'Criação de sites, lojas virtuais, landing pages e aplicações web com design responsivo.',
      icon: <Code className="h-5 w-5" />,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      id: 'consulting',
      title: 'Consultoria',
      description: 'Orientação estratégica para presença digital, marketing online e otimização de processos.',
      icon: <BarChart4 className="h-5 w-5" />,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'maintenance',
      title: 'Manutenção',
      description: 'Serviços de manutenção, atualização e correção de problemas para sites e aplicações.',
      icon: <Wrench className="h-5 w-5" />,
      color: 'bg-green-50 text-green-600',
    },
  ];

  return (
    <section className="py-20 bg-secondary" id="services">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Meus Serviços
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            O que ofereço
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Serviços de alta qualidade personalizados para atender às suas necessidades específicas.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl group"
              id={service.id}
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "transition-transform duration-300 group-hover:scale-110",
                service.color
              )}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link 
                to="/agendamento" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center group-hover:underline"
              >
                Agendar serviço
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

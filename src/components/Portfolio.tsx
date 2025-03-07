
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type ProjectCategory = 'all' | 'design' | 'development' | 'consulting';

type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  imageUrl: string;
  description: string;
  client: string;
};

const Portfolio = ({ limit = 0 }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Desenvolvimento' },
    { value: 'consulting', label: 'Consultoria' },
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Redesign de Marca',
      category: 'design',
      imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      description: 'Redesign completo da identidade visual para empresa de tecnologia.',
      client: 'TechCorp',
    },
    {
      id: 2,
      title: 'E-commerce Responsivo',
      category: 'development',
      imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      description: 'Desenvolvimento de loja virtual responsiva com foco em conversão.',
      client: 'Fashion Store',
    },
    {
      id: 3,
      title: 'Estratégia Digital',
      category: 'consulting',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      description: 'Consultoria para estratégia de presença digital e marketing.',
      client: 'Startup XYZ',
    },
    {
      id: 4,
      title: 'Aplicativo Mobile',
      category: 'development',
      imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      description: 'Desenvolvimento de aplicativo de entrega para restaurante local.',
      client: 'Restaurante Delícia',
    },
    {
      id: 5,
      title: 'Branding Completo',
      category: 'design',
      imageUrl: 'https://images.unsplash.com/photo-1634942537034-2531253eef64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      description: 'Criação de identidade visual completa para nova empresa.',
      client: 'GreenEnergy',
    },
    {
      id: 6,
      title: 'Otimização de Processos',
      category: 'consulting',
      imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      description: 'Consultoria para otimização de processos internos e fluxo de trabalho.',
      client: 'LogisticsPro',
    },
  ];
  
  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );
  
  // If limit is provided and greater than 0, limit the number of projects shown
  const displayedProjects = limit > 0 ? filteredProjects.slice(0, limit) : filteredProjects;
  
  return (
    <section className="py-20 relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Meu Portfólio
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trabalhos Recentes
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Explore alguns dos projetos que desenvolvi para diversos clientes em diferentes segmentos.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                "hover:bg-secondary focus-ring",
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded-full inline-block mb-2">
                    {categories.find(c => c.value === project.category)?.label}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{project.description}</p>
                  <p className="text-white/70 text-xs">Cliente: {project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Link if Limit is Applied */}
        {limit > 0 && projects.length > limit && (
          <div className="text-center mt-10">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium smooth-transition"
            >
              Ver todos os projetos 
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

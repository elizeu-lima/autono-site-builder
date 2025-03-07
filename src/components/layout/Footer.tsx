
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              <span className="text-primary">Pro</span>Autônomo
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Oferecendo serviços profissionais da mais alta qualidade para atender 
              às suas necessidades com excelência e comprometimento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-medium text-base mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary smooth-transition">
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-muted-foreground hover:text-primary smooth-transition">
                  Portfólio
                </NavLink>
              </li>
              <li>
                <NavLink to="/agendamento" className="text-muted-foreground hover:text-primary smooth-transition">
                  Agendamento
                </NavLink>
              </li>
              <li>
                <NavLink to="/contato" className="text-muted-foreground hover:text-primary smooth-transition">
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-medium text-base mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#design" className="text-muted-foreground hover:text-primary smooth-transition">
                  Design Gráfico
                </a>
              </li>
              <li>
                <a href="#development" className="text-muted-foreground hover:text-primary smooth-transition">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#consulting" className="text-muted-foreground hover:text-primary smooth-transition">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#maintenance" className="text-muted-foreground hover:text-primary smooth-transition">
                  Manutenção
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-base mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">(41) 99735-9141</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">elizeulimafrontend@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">Curitiba, PR - Brasil</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Elizeu Lima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

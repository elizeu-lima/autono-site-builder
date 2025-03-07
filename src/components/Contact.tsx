
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Em breve entraremos em contato.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '5511987654321';
    const message = `Olá! Gostaria de mais informações sobre seus serviços.`;
    
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-muted relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Entre em Contato
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Vamos Conversar
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Estou disponível para responder suas dúvidas e discutir como posso ajudar.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* WhatsApp Contact Card */}
              <div className="glass-card rounded-xl p-6 border-l-4 border-green-500 overflow-hidden relative">
                <div className="absolute right-0 top-0 w-20 h-20 bg-green-500/10 rounded-bl-full" />
                
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <MessageSquare className="h-5 w-5 text-green-500 mr-2" />
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Clique no botão abaixo para iniciar uma conversa direta via WhatsApp.
                </p>
                <Button 
                  onClick={openWhatsApp}
                  variant="outline" 
                  className="w-full text-green-600 border-green-500 hover:bg-green-50 flex items-center justify-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </div>
              
              {/* Contact Cards */}
              <div className="glass-card rounded-xl p-6 flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="text-base font-medium">Telefone</h4>
                  <p className="text-muted-foreground">+55 (41) 99735-9141</p>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="text-base font-medium">Email</h4>
                  <p className="text-muted-foreground">elizeulimafrontend@gmail.com</p>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="text-base font-medium">Localização</h4>
                  <p className="text-muted-foreground">Curitiba, PR - Brasil</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="glass-card rounded-xl p-6 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Seu email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Digite sua mensagem..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full flex items-center justify-center">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

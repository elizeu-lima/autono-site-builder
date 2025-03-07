
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircle, Clock } from 'lucide-react';

type TimeSlot = {
  id: number;
  time: string;
  available: boolean;
};

const Scheduling = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { toast } = useToast();

  const services = [
    { id: 'wp', name: 'Wordpress' },
    { id: 'development', name: 'Desenvolvimento Web' },
    { id: 'consulting', name: 'Consultoria' },
    { id: 'maintenance', name: 'Manutenção' },
  ];

  // Simulated time slots
  const timeSlots: TimeSlot[] = [
    { id: 1, time: '09:00', available: true },
    { id: 2, time: '10:00', available: true },
    { id: 3, time: '11:00', available: false },
    { id: 4, time: '13:00', available: true },
    { id: 5, time: '14:00', available: true },
    { id: 6, time: '15:00', available: false },
    { id: 7, time: '16:00', available: true },
    { id: 8, time: '17:00', available: true },
  ];

  const handleScheduleService = () => {
    if (!date || !selectedTimeSlot || !selectedService) {
      toast({
        title: "Informações incompletas",
        description: "Por favor, selecione data, horário e serviço.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a server
    const selectedTime = timeSlots.find(slot => slot.id === selectedTimeSlot)?.time;
    
    toast({
      title: "Agendamento realizado com sucesso!",
      description: `Serviço: ${services.find(s => s.id === selectedService)?.name} | Data: ${format(date, 'PPP', { locale: ptBR })} às ${selectedTime}`,
      variant: "default",
    });
  };

  return (
    <section className="py-20 relative overflow-hidden" id="scheduling">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary blur-3xl opacity-70" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Agende Agora
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Marque um Horário
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Escolha a data e o horário que for mais conveniente para você.
          </p>
        </div>
        
        <div className="glass-card max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Calendar Side */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-border">
              <h3 className="font-medium mb-4">Selecione uma data</h3>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className={cn("rounded border p-3 pointer-events-auto")}
                  disabled={(date) => {
                    // Disable past dates and weekends for this demo
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);
                    const day = date.getDay();
                    return date < now || day === 0;
                  }}
                  locale={ptBR}
                />
              </div>
            </div>
            
            {/* Details Side */}
            <div className="p-6">
              {/* Service Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Selecione o serviço</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={cn(
                        "flex items-center p-3 rounded-lg border transition-all",
                        selectedService === service.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {selectedService === service.id && (
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                      )}
                      <span>{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              {date && (
                <div className="mb-6">
                  <h3 className="font-medium mb-3">
                    Horários disponíveis para {format(date, "dd 'de' MMMM", { locale: ptBR })}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        disabled={!slot.available}
                        onClick={() => setSelectedTimeSlot(slot.id)}
                        className={cn(
                          "flex items-center justify-center p-2 rounded-lg border transition-all",
                          !slot.available && "opacity-50 cursor-not-allowed",
                          selectedTimeSlot === slot.id
                            ? "border-primary bg-primary/5 text-primary"
                            : slot.available
                            ? "border-border hover:border-primary/50"
                            : "bg-muted border-muted"
                        )}
                      >
                        <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span>{slot.time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              <Button
                onClick={handleScheduleService}
                disabled={!date || !selectedTimeSlot || !selectedService}
                className="w-full mt-4"
              >
                Confirmar Agendamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;

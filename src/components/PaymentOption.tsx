
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Mock PIX QR code URL
const pixQrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126330014BR.GOV.BCB.PIX0111123456789021PAGAMENTO%20SERVICO5204000053039865802BR5913PROAUTONOMO6008SAO%20PAULO61080540900062160512PAGSERVICOS63043E5E";

const PaymentOption = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Mock PIX key
  const pixKey = "contato@proautonomo.com.br";

  const handleCopyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para a área de transferência.",
    });
    
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="payment">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Método de Pagamento
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Pagamento via PIX
          </h2>
          <p className="max-w-md mx-auto text-muted-foreground">
            Realize pagamentos de forma rápida, segura e sem taxas usando o PIX.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="glass-card rounded-xl overflow-hidden shadow-lg">
            {/* Header with PIX Logo */}
            <div className="bg-gradient-to-r from-primary to-blue-700 p-6 text-white text-center">
              <h3 className="text-xl font-bold">PIX</h3>
              <p className="text-white/80 text-sm">Transferência instantânea</p>
            </div>
            
            {/* QR Code */}
            <div className="p-6 flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-inner mb-6">
                <img 
                  src={pixQrCodeUrl} 
                  alt="QR Code para pagamento PIX" 
                  className="w-full max-w-[200px] h-auto"
                />
              </div>
              
              {/* PIX Key */}
              <div className="w-full space-y-2 mb-6">
                <label className="text-sm font-medium block">
                  Chave PIX (Email)
                </label>
                <div className="flex items-center">
                  <div className="bg-muted rounded-l-lg p-2 px-3 flex-grow border border-r-0 border-border">
                    <p className="text-sm text-muted-foreground truncate">
                      {pixKey}
                    </p>
                  </div>
                  <Button
                    onClick={handleCopyPixKey}
                    variant="outline"
                    className={cn(
                      "rounded-l-none",
                      copied ? "bg-green-50 text-green-600 border-green-200" : ""
                    )}
                    aria-label="Copiar chave PIX"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="text-sm text-muted-foreground space-y-2 w-full">
                <h4 className="font-medium text-foreground">Como pagar:</h4>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Abra o aplicativo do seu banco</li>
                  <li>Encontre a opção PIX</li>
                  <li>Escaneie o QR code ou copie a chave</li>
                  <li>Confirme as informações e o valor</li>
                  <li>Conclua o pagamento</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOption;

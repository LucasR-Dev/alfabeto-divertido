import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Sparkles } from "lucide-react";

const PAYMENT_URL = "https://buy.braip.com/checkout/plapzq6z/chez0zpp?currency=BRL";

const PriceSection = () => {
  return (
    <section id="preco" className="py-16 md:py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-rainbow-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-rainbow-green/20 rounded-full blur-2xl" />

      <div className="container relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Garanta o Seu Agora!
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferta especial por tempo limitado
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-card rounded-3xl shadow-playful p-8 md:p-10">
            {/* Discount badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-rainbow-orange text-primary-foreground px-6 py-2 rounded-full font-bold shadow-lg">
              <Sparkles className="inline w-4 h-4 mr-1" />
              60% OFF
            </div>

            <div className="text-center pt-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Abc para Colorir
              </h3>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-xl text-price-old line-through font-medium">
                    R$ 29,99
                  </span>
                  <span className="bg-rainbow-green/20 text-rainbow-green px-3 py-1 rounded-full text-sm font-bold">
                    Economize R$ 18,00
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-muted-foreground">R$</span>
                  <span className="text-6xl md:text-7xl font-extrabold text-price-new">
                    11
                  </span>
                  <span className="text-3xl font-bold text-price-new">,99</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              {/* What's included */}
              <div className="text-left bg-background rounded-xl p-6 mb-8">
                <p className="font-bold text-foreground mb-4">
                  O que você recebe:
                </p>
                <ul className="space-y-3">
                  {[
                    "26 páginas para colorir (A-Z)",
                    "Ilustrações de alta qualidade",
                    "PDF pronto para impressão",
                    "Download imediato após a compra",
                    "Atualizações gratuitas",
                    "Suporte por email",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-rainbow-green/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-rainbow-green" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button variant="cta" size="xl" className="w-full mb-4" asChild>
                <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5" />
                  Comprar Agora por R$ 11,99
                </a>
              </Button>

              <p className="text-sm text-muted-foreground">
                🔒 Pagamento 100% seguro • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;

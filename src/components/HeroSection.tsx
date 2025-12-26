import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles, Star } from "lucide-react";
import capaAbc from "@/assets/capa-abc.png";

const PAYMENT_URL = "https://buy.braip.com/checkout/plapzq6z/chez0zpp?currency=BRL";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden py-12 md:py-20">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-rainbow-yellow/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-rainbow-blue/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rainbow-green/20 rounded-full blur-xl" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-br from-rainbow-yellow/30 via-rainbow-blue/20 to-rainbow-green/30 rounded-3xl blur-2xl" />
              <img
                src={capaAbc}
                alt="Abc para Colorir - Livro de colorir educativo para crianças"
                className="relative w-full max-w-sm md:max-w-md rounded-2xl shadow-playful"
              />
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-rainbow-orange text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce-slow">
                <Sparkles className="inline w-4 h-4 mr-1" />
                PDF Digital
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full mb-6 shadow-sm">
              <Star className="w-4 h-4 text-rainbow-yellow fill-rainbow-yellow" />
              <span className="text-sm font-medium text-foreground">
                Mais de 500 famílias já compraram!
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-gradient-rainbow">Abc para Colorir</span>
              <br />
              <span className="text-foreground">
                Aprenda o Alfabeto Brincando!
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              26 páginas incríveis com animais e objetos para colorir! Seu filho
              vai aprender cada letra do alfabeto enquanto se diverte pintando.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="xl" asChild>
                <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5" />
                  Quero Comprar Agora!
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("beneficios")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Saiba Mais
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                ✓ Download Imediato
              </span>
              <span className="flex items-center gap-1">
                ✓ Garantia de 7 dias
              </span>
              <span className="flex items-center gap-1">
                ✓ Pagamento Seguro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToPrice = () => {
    document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Final CTA */}
      <div className="py-12 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não perca essa oportunidade!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Por apenas R$ 11,99, seu filho vai aprender o alfabeto de forma
            divertida e criativa.
          </p>
          <Button variant="cta" size="xl" onClick={scrollToPrice}>
            <ShoppingCart className="w-5 h-5" />
            Comprar por R$ 11,99
          </Button>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-foreground text-lg">
                Abc para Colorir
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a
                href="#suporte"
                className="hover:text-foreground transition-colors"
              >
                Contato
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

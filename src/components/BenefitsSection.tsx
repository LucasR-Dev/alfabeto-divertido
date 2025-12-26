import { Book, Palette, Heart, Lightbulb, Clock, Printer } from "lucide-react";

const benefits = [
  {
    icon: Book,
    title: "26 Páginas Completas",
    description:
      "Uma página para cada letra do alfabeto, do A ao Z, com ilustrações exclusivas.",
    color: "rainbow-blue",
  },
  {
    icon: Palette,
    title: "Animais e Objetos",
    description:
      "Cada letra acompanha um animal ou objeto divertido para colorir e aprender.",
    color: "rainbow-green",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado Divertido",
    description:
      "Combine educação com entretenimento. Seu filho aprende brincando!",
    color: "rainbow-yellow",
  },
  {
    icon: Heart,
    title: "Feito com Carinho",
    description:
      "Ilustrações cuidadosamente desenhadas para encantar as crianças.",
    color: "rainbow-red",
  },
  {
    icon: Printer,
    title: "Imprima Quantas Vezes Quiser",
    description:
      "PDF de alta qualidade para impressão ilimitada. Imprima em casa ou na gráfica!",
    color: "rainbow-purple",
  },
  {
    icon: Clock,
    title: "Acesso Imediato",
    description:
      "Após a compra, receba o link de download instantaneamente no seu email.",
    color: "rainbow-orange",
  },
];

const colorClasses: Record<string, string> = {
  "rainbow-blue": "bg-rainbow-blue/10 text-rainbow-blue",
  "rainbow-green": "bg-rainbow-green/10 text-rainbow-green",
  "rainbow-yellow": "bg-rainbow-yellow/10 text-rainbow-yellow",
  "rainbow-red": "bg-rainbow-red/10 text-rainbow-red",
  "rainbow-purple": "bg-rainbow-purple/10 text-rainbow-purple",
  "rainbow-orange": "bg-rainbow-orange/10 text-rainbow-orange",
};

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que o{" "}
            <span className="text-gradient-rainbow">Abc para Colorir</span> é
            Especial?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um material educativo completo que transforma o aprendizado do
            alfabeto em uma experiência divertida e memorável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-2xl shadow-card hover:shadow-playful transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClasses[benefit.color]}`}
              >
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

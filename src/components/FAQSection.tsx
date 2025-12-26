import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Em qual formato vou receber o produto?",
    answer:
      "O Abc para Colorir é entregue em formato PDF de alta resolução. Você poderá abrir em qualquer dispositivo (computador, tablet ou celular) e imprimir quantas vezes quiser.",
  },
  {
    question: "Posso imprimir em qualquer impressora?",
    answer:
      "Sim! O PDF foi otimizado para impressão em impressoras domésticas comuns (jato de tinta ou laser). Recomendamos usar papel sulfite A4 comum ou papel fotográfico para melhores resultados. Você também pode levar a uma gráfica para impressão profissional.",
  },
  {
    question: "Qual a faixa etária recomendada?",
    answer:
      "O material é ideal para crianças de 2 a 7 anos que estão em fase de alfabetização. As ilustrações são simples e adequadas para diferentes níveis de habilidade motora.",
  },
  {
    question: "Como recebo o produto após a compra?",
    answer:
      "Após a confirmação do pagamento, você receberá automaticamente um email com o link para download do PDF. O acesso é imediato para pagamentos via PIX ou cartão de crédito.",
  },
  {
    question: "Posso usar o material em sala de aula ou escola?",
    answer:
      "Sim! Ao adquirir o produto, você tem direito de uso pessoal e educacional. Professores podem imprimir cópias para seus alunos. Não é permitida a revenda ou distribuição comercial do material.",
  },
  {
    question: "E se eu não gostar do produto?",
    answer:
      "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta entrar em contato conosco que devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "O acesso ao download expira?",
    answer:
      "Não! Após a compra, você terá acesso vitalício ao material. Pode baixar quantas vezes precisar. Além disso, se lançarmos atualizações ou melhorias, você receberá gratuitamente.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Abc para Colorir
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import { Mail, Clock, MessageCircle } from "lucide-react";

const SupportSection = () => {
  return (
    <section id="suporte" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Precisa de Ajuda?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar com qualquer dúvida sobre o
            produto ou sua compra.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl p-6 text-center shadow-card hover:shadow-playful transition-all duration-300 w-full md:w-1/2">
            <div className="w-14 h-14 bg-rainbow-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-rainbow-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-3">
              Resposta em até 24 horas
            </p>
            <a
              href="mailto:suporte@abcparacolorir.com.br"
              className="text-primary hover:underline font-medium"
            >
              abcparacolorir@gmail.com
            </a>
          </div>
          {/*
          <div className="bg-background rounded-2xl p-6 text-center shadow-card hover:shadow-playful transition-all duration-300 w-full md:w-1/2">
            <div className="w-14 h-14 bg-rainbow-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-rainbow-green" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-3">
              Atendimento rápido
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              (11) 99999-9999
            </a>
          </div>
          */}
          <div className="bg-background rounded-2xl p-6 text-center shadow-card hover:shadow-playful transition-all duration-300 w-full md:w-1/2">
            <div className="w-14 h-14 bg-rainbow-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-rainbow-yellow" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Horário de Atendimento
            </h3>
            <p className="text-muted-foreground mb-3">Segunda a Sexta</p>
            <p className="text-foreground font-medium">9h às 18h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

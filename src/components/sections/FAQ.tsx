import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HelpCircle,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o rastreamento veicular?",
      a: "O rastreador utiliza tecnologia GPS para captar a localização do veículo e enviar os dados para nossos servidores, permitindo o acompanhamento em tempo real pelo aplicativo.",
    },
    {
      q: "Preciso instalar algum equipamento?",
      a: "Sim. Um pequeno rastreador é instalado no veículo para captar o sinal GPS.",
    },
    {
      q: "O rastreamento funciona em tempo real?",
      a: "Sim. A localização do veículo é atualizada constantemente no mapa.",
    },
    {
      q: "Posso bloquear o veículo pelo celular?",
      a: "Sim. O bloqueio remoto pode ser acionado diretamente pelo aplicativo em caso de emergência.",
    },
    {
      q: "Funciona em qualquer cidade?",
      a: "Sim. O sistema funciona em qualquer lugar com cobertura de sinal.",
    },
    {
      q: "Existe aplicativo para celular?",
      a: "Sim. Nosso aplicativo está disponível para Android e iOS.",
    },
    {
      q: "Quanto custa o serviço?",
      a: "Temos planos acessíveis a partir de valores mensais.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-4">
            Dúvidas Frequentes
          </h2>

          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
            Tire suas principais dúvidas sobre nosso sistema de rastreamento
            veicular.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card
              key={i}
              rounded="2xl"
              className="overflow-hidden border border-zinc-200 dark:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                      openIndex === i
                        ? "bg-primary text-white"
                        : "bg-zinc-100 dark:bg-white/5 text-zinc-400"
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>

                  <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition">
                    {faq.q}
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>

        {/* SUPPORT CARD */}
        <div className="mt-16">
          <Card
            rounded="3xl"
            hoverable={false}
            className="p-8 sm:p-10 text-center border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <PhoneCall className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
              Ainda tem dúvidas?
            </h3>

            <p className="text-zinc-500 dark:text-zinc-400 mb-8">
              Nossa equipe está pronta para ajudar você agora mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5519995778009?text=Olá!%20Quero%20mais%20informações%20sobre%20o%20rastreamento%20veicular%20da%20GoTracker."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="emerald" className="px-6 py-4 rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>

              <a
                href="https://wa.me/5519995778009?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20os%20planos%20de%20rastreamento%20da%20GoTracker."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" glow className="px-6 py-4 rounded-xl">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Falar com especialista
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

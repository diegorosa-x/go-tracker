import React from "react";
import { Zap, Smartphone, Lock, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Instalação Rápida",
      desc: "Nossos técnicos instalam o rastreador de forma discreta e segura no seu veículo.",
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      id: "02",
      title: "Acesso ao App",
      desc: "Baixe nosso aplicativo e tenha acesso instantâneo a todas as informações.",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
    },
    {
      id: "03",
      title: "Controle Total",
      desc: "Monitore, receba alertas e bloqueie seu veículo de qualquer lugar do mundo.",
      icon: <Lock className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="py-24 bg-zinc-100/50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Simples e Eficiente
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Como Funciona?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <Card className="p-10 relative z-10 h-full" rounded="3xl">
                <div className="text-6xl font-black text-primary/10 absolute top-6 right-8 group-hover:text-primary/20 transition-colors">
                  {s.id}
                </div>
                <div className="mb-8 p-4 w-fit rounded-2xl bg-primary/10 border border-primary/20">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                  {s.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {s.desc}
                </p>
              </Card>
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                  <ChevronRight className="w-8 h-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5519995778009?text=Olá!%20Quero%20proteger%20meu%20veículo%20com%20o%20rastreamento%20da%20GoTracker."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="lg"
              className="px-10 py-4 shadow-xl"
            >
              Quero proteger meu veículo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

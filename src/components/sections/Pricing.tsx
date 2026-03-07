import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "39",
      cents: "90",
      features: [
        "Rastreamento em tempo real",
        "App Android e iOS",
        "Alertas básicos",
        "Histórico de rotas 30 dias",
        "Suporte padrão"
      ],
      button: "Começar",
      popular: false
    },
    {
      name: "Profissional",
      price: "49",
      cents: "90",
      features: [
        "Tudo do plano básico",
        "Bloqueio remoto via app",
        "Histórico de 90 dias",
        "Cerca eletrônica",
        "Alertas inteligentes"
      ],
      button: "Assinar Agora",
      popular: true
    },
    {
      name: "Premium",
      price: "69",
      cents: "90",
      features: [
        "Tudo do plano profissional",
        "Telemetria avançada",
        "Relatórios detalhados",
        "Monitoramento prioritário",
        "Suporte premium"
      ],
      button: "Começar",
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title & Subtitle */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
              Planos que <span className="text-primary">cabem no seu bolso</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium text-lg">
              Escolha o plano ideal para proteger seu veículo com nossa tecnologia de rastreamento em tempo real.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              rounded="3xl"
              className={`p-10 border transition-all duration-500 ${
                plan.popular 
                  ? 'border-primary/50 shadow-2xl shadow-primary/20 bg-white dark:bg-zinc-900/60 lg:scale-110 z-10' 
                  : 'border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <h4 className={`text-xl font-black mb-4 uppercase tracking-wider ${plan.popular ? 'text-primary' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-zinc-500 dark:text-zinc-400 text-xl font-bold">R$</span>
                  <span className="text-6xl font-black text-zinc-900 dark:text-zinc-100">{plan.price}</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-2xl font-bold">,{plan.cents}</span>
                  <span className="text-zinc-400 dark:text-zinc-500 ml-2 font-medium">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-primary/20' : 'bg-zinc-100 dark:bg-white/5'}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-zinc-400'}`} />
                    </div>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'glass'} 
                glow={plan.popular}
                className="w-full py-4"
              >
                {plan.button}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
            * Instalação e equipamentos podem ter custo adicional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

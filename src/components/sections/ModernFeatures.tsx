import React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Navigation,
  Wrench,
  Wallet,
  UserCheck,
  BellRing,
  Search,
  Play,
  Smartphone,
} from "lucide-react";
import Button from "../ui/Button";

const ModernFeatures = () => {
  const leftFeatures = [
    {
      title: "Telemetria Avançada",
      desc: "Acesse dados detalhados sobre desempenho do veículo e comportamento do motorista.",
      icon: <Cpu className="w-6 h-6 text-primary" />,
    },
    {
      title: "Rastreamento em tempo real",
      desc: "Veja a localização exata do veículo no mapa com atualização instantânea.",
      icon: <Navigation className="w-6 h-6 text-primary" />,
    },
    {
      title: "Gestão de manutenção",
      desc: "Receba alertas automáticos para manutenção preventiva.",
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
  ];

  const rightFeatures = [
    {
      title: "Controle de despesas",
      desc: "Acompanhe todos os gastos da frota de forma centralizada.",
      icon: <Wallet className="w-6 h-6 text-primary" />,
    },
    {
      title: "Monitoramento de motoristas",
      desc: "Avalie desempenho e comportamento de condução em tempo real.",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
    {
      title: "Alertas e notificações",
      desc: "Receba alertas de movimento, velocidade e eventos importantes.",
      icon: <BellRing className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section
      id="app"
      className="py-28 relative overflow-hidden bg-light-bg dark:bg-dark-bg"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-secondary/10 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Experiência Mobile
          </h2>

          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            O Sistema Completo na{" "}
            <span className="text-gradient">Palma da sua Mão</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-12 w-full">
            {leftFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-6 text-center lg:text-right group"
              >
                <div className="flex-1 order-2 lg:order-1">
                  <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                    {f.title}
                  </h4>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center flex-shrink-0 order-1 lg:order-2 group-hover:scale-110 transition-transform border-primary/20">
                  {f.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER PHONE */}
          <div className="flex-1 flex flex-col items-center relative py-10">
            {/* Glow behind phone */}
            <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10 w-[280px] md:w-[320px]"
            >
              <div className="relative rounded-[3rem] border-[10px] border-zinc-900 dark:border-zinc-800 bg-zinc-950 overflow-hidden shadow-[0_0_50px_rgba(245,130,32,0.2)]">
                <img
                  src="public\assets\img\tracking.png"
                  alt="GoTracker App Map"
                  className="w-full h-125 md:h-150 opacity-90"
                />

                {/* App UI */}
                <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
                  <div className="glass px-3 py-1 rounded-full text-[10px] font-bold text-primary flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    ONLINE
                  </div>

                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* APP STORES */}
            <div className="mt-12 flex items-center gap-4">
              <div className="bg-black text-white px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
                <Play className="w-6 h-6 fill-white" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">
                    Disponível no
                  </p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </div>

              <div className="bg-black text-white px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">
                    Disponível na
                  </p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://gotracker.seeflex.com.br/users/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" glow className="px-8 py-4">
                  Testar sistema agora
                </Button>
              </a>

              <a
                href="https://wa.me/5519995778009?text=Olá!%20Gostaria%20de%20ver%20uma%20demonstração%20do%20sistema%20de%20rastreamento%20da%20GoTracker."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glass" size="lg" className="px-8 py-4">
                  Ver demonstração
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-12 w-full">
            {rightFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-6 text-center lg:text-left group"
              >
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border-primary/20">
                  {f.icon}
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                    {f.title}
                  </h4>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;

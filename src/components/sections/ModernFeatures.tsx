import React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Navigation,
  Wrench,
  Wallet,
  UserCheck,
  BellRing,
  Play,
  Smartphone,
  Shield,
  MapPin,
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

            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] rounded-[3rem] border-[8px] border-zinc-800 bg-white overflow-hidden shadow-2xl shadow-secondary/20">

              <img
                src="/assets/img/tracking.png"
                alt="App Mockup"
                className="w-full aspect-[9/19] object-cover opacity-90"
              />

              <div className="absolute inset-0 from-white via-transparent to-transparent" />

              {/* FLOATING CARD 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 -right-4 sm:-right-8 glass p-3 sm:p-4 rounded-2xl shadow-xl border-secondary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Shield className="text-emerald-500 w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                      Status
                    </p>
                    <p className="text-sm font-bold text-secondary">
                      Veículo Protegido
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 -left-4 sm:-left-8 glass p-3 sm:p-4 rounded-2xl shadow-xl border-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                      Localização
                    </p>
                    <p className="text-sm font-bold text-secondary">
                      Hortolândia, SP
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* APP STORES */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
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
                  Testar agora
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
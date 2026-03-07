import React from "react";
import { motion } from "motion/react";
import {
  Navigation,
  BellRing,
  Activity,
  Shield,
  Check,
  Car,
} from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Features = () => {
  const mainFeatures = [
    {
      title: "Rastreamento em tempo real",
      desc: "Veja a localização do seu veículo no mapa com atualização constante via satélite.",
      icon: <Navigation className="w-6 h-6 text-primary" />,
    },
    {
      title: "Alertas inteligentes",
      desc: "Receba notificações de movimento, ignição e excesso de velocidade.",
      icon: <BellRing className="w-6 h-6 text-primary" />,
    },
    {
      title: "Histórico de rotas",
      desc: "Acesse todo o trajeto percorrido pelo veículo quando quiser.",
      icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
      title: "Cerca eletrônica",
      desc: "Defina áreas seguras e receba alertas quando o veículo sair do perímetro.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ];

  const secondaryBenefits = [
    "Bloqueio remoto",
    "Monitoramento 24h",
    "Relatórios completos",
    "Aplicativo mobile",
  ];

  return (
    <section id="recursos" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-6">
        {/* Title & Subtitle */}
        <div className="text-center mb-12 md:mb-16 px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
              Recursos que{" "}
              <span className="text-primary">garantem sua segurança</span>
            </h2>

            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium text-base md:text-lg">
              Nossa tecnologia de rastreamento oferece controle total do seu
              veículo em tempo real com alertas inteligentes e monitoramento
              24h.
            </p>
          </motion.div>
        </div>

        {/* VIDEO SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full md:max-w-4xl md:mx-auto mb-16 md:mb-20"
        >
          <div className="glass md:rounded-[1.5rem] md:p-3 bg-black md:border border-zinc-800 shadow-2xl overflow-hidden">
            <div className="relative w-full overflow-hidden aspect-video bg-zinc-100 dark:bg-zinc-900 md:rounded-2xl">
              {/* VIDEO */}
              <video
                src="/assets/img/tracking-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 dark:opacity-60"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />

              {/* Vehicle Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping" />
                  <div className="relative w-12 h-12 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Route Line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                viewBox="0 0 800 450"
              >
                <path
                  d="M100,400 Q200,350 300,380 T500,300 T700,100"
                  fill="none"
                  stroke="#F58220"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  className="animate-[dash_20s_linear_infinite]"
                />
              </svg>
            </div>
          </div>

          {/* Decorative Blur */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full -z-10" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 blur-[80px] rounded-full -z-10" />
        </motion.div>

        {/* MAIN FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 md:mb-16 px-6 md:px-0">
          {mainFeatures.map((f, i) => (
            <Card
              key={i}
              className="p-6 md:p-8 group bg-white dark:bg-zinc-900/40"
              rounded="3xl"
            >
              <div className="mb-5 md:mb-6 p-4 w-fit rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                {f.icon}
              </div>

              <h4 className="text-lg md:text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                {f.title}
              </h4>

              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {f.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* SECONDARY BENEFITS */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 mb-14 md:mb-16 px-6 md:px-0">
          {secondaryBenefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-emerald-500" />
              </div>

              <span className="font-bold text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-6 md:px-0">
          <a
            href="https://wa.me/5519995778009?text=Olá!%20Quero%20começar%20o%20monitoramento%20veicular%20com%20a%20GoTracker."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              glow
              className="w-full sm:w-auto"
            >
              Começar Monitoramento
            </Button>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;

import React from "react";
import { motion } from "motion/react";
import { ChevronRight, Shield, MapPin } from "lucide-react";
import Counter from "../ui/Counter";

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid -z-10 opacity-50 dark:opacity-100" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/10 dark:bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* USERS BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6  mt-10">
                <div className="flex -space-x-2 ">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-light-bg dark:border-dark-bg bg-zinc-200 dark:bg-zinc-800 overflow-hidden"
                    >
                      <img
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>

                <span className="text-xs font-bold text-secondary dark:text-primary">
                  <Counter value="5000" suffix="+" /> Clientes Satisfeitos
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-secondary dark:text-zinc-100">
                O Controle Total do Seu Veículo na{" "}
                <span className="text-primary">Palma da Mão</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-base sm:text-lg lg:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-10 mx-auto lg:mx-0 font-medium">
                Proteja seu patrimônio com tecnologia de ponta, IA e
                monitoramento 24h via satélite. A segurança que você merece com
                a precisão que você precisa.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5519995778009?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20rastreamento%20veicular%20da%20GoTracker."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg overflow-hidden transition-all glow-primary cursor-pointer">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Começar Agora
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </a>

                <a
                  href="https://gotracker.seeflex.com.br/users/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl glass font-bold text-lg hover:bg-zinc-100 dark:hover:bg-white/10 transition-all cursor-pointer text-secondary dark:text-zinc-100 border-secondary/20">
                    Ver Demonstração
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            {/* Radar Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-secondary/20 rounded-full animate-ping" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-primary/10 rounded-full animate-pulse" />
            </div>

            <div className="relative z-10 mx-auto w-[260px] sm:w-[300px] lg:max-w-[320px]">
              {/* PHONE MOCKUP */}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

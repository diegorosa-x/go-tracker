import React from "react";
import { motion } from "motion/react";

export const AppShowcase = () => (
  <section
    id="quem-somos"
    aria-labelledby="app-showcase-title"
    className="relative z-10 overflow-hidden bg-zinc-50 py-24"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage:
          "linear-gradient(#2B3990 1px, transparent 1px), linear-gradient(90deg, #2B3990 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <header>
              <h2
                id="app-showcase-title"
                className="mb-8 text-2xl font-black leading-tight text-[#2B3990] md:text-5xl"
              >
                Sistema de monitoramento veicular exclusivo em todo o Brasil
              </h2>

              <div className="max-w-xl space-y-6 text-lg leading-relaxed text-zinc-700">
                <p>
                  A GoTracker nasceu para oferecer rastreamento veicular com
                  tecnologia avançada, preço justo e atendimento de qualidade.
                  Somos especialistas em rastreamento e telemetria para veículos
                  de passeio, utilitários e frotas empresariais em todo o
                  território nacional.
                </p>

                <p>
                  Trabalhamos com equipamentos homologados pela Anatel e um
                  sistema exclusivo de monitoramento, acessível via web e
                  aplicativo para Android e iOS, para dar mais controle,
                  segurança e eficiência à sua operação.
                </p>
              </div>
            </header>

            <nav
              aria-label="Links para download do aplicativo"
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Baixar aplicativo no Google Play"
                  className="h-14"
                />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Baixar aplicativo na App Store"
                  className="h-14"
                />
              </a>
            </nav>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center lg:w-1/2">
          <div
            aria-hidden="true"
            className="absolute left-10 top-20 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#F7941E] shadow-xl"
          >
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-20 right-10 z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#2B3990] shadow-xl"
          >
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10"
            aria-labelledby="app-mockup-caption"
          >
            <div className="relative h-[620px] w-[300px] overflow-hidden rounded-[3.5rem] border-[10px] border-[#1a1c2c] bg-[#1a1c2c] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <div className="relative h-full w-full overflow-hidden bg-[#eef2f7]">
                <img
                  src="/assets/img/phone-bg.jpeg"
                  alt="Tela do aplicativo GoTracker exibida no mockup do celular"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-8 left-1/2 h-1.5 w-1/3 -translate-x-1/2 rounded-full bg-white/70 backdrop-blur-sm"
                />
              </div>
            </div>

            <figcaption id="app-mockup-caption" className="sr-only">
              Exemplo visual do aplicativo de monitoramento veicular da
              GoTracker, disponível para acesso via web, Android e iOS.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </div>
  </section>
);
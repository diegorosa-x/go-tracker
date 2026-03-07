import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#3B468F] to-[#4C57A6]">
      {/* Glow fundo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px] bg-orange-500/20 blur-[160px] md:blur-[200px] rounded-full -z-10" />

      {/* Glow radial */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[4rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center border border-white/10 backdrop-blur-md bg-white/5 relative overflow-hidden">
          {/* Ícone decorativo */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-10">
            <Shield className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-white" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
              Segurança Garantida
            </div>

            {/* Título */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-tight">
              Proteja seu veículo <br className="hidden sm:block" />
              <span className="text-orange-400">hoje mesmo</span>
            </h2>

            {/* Texto */}
            <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 font-medium leading-relaxed">
              Mais de 5.000 motoristas já confiam em nossa tecnologia. Tenha
              controle total do seu veículo direto no celular.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="https://wa.me/5519995778009?text=Olá!%20Quero%20começar%20agora%20com%20o%20rastreamento%20veicular%20da%20GoTracker."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-lg sm:text-xl shadow-lg hover:scale-105 transition-all">
                  Começar Agora
                </button>
              </a>

              <a
                href="https://gotracker.seeflex.com.br/users/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl border border-white/20 text-white font-black text-lg sm:text-xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all">
                  Ver Demonstração
                </button>
              </a>
            </div>

            {/* Benefícios */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-90 text-sm sm:text-base">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
                Selo de Confiança
              </div>

              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
                Suporte 24h
              </div>

              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
                Tecnologia Satélite
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

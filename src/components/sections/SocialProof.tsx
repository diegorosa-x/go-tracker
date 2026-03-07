import React from "react";
import { ArrowRight } from "lucide-react";
import Counter from "../ui/Counter";

const SocialProof = () => {
  return (
    <div className="border-y border-white/10 bg-secondary py-14 sm:py-16">
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">
            Empresas e motoristas que confiam em nossa tecnologia
          </p>
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 mb-12 opacity-80 text-white/80">

          <div className="flex items-center gap-2 font-black text-lg sm:text-xl tracking-tighter">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg" />
            LOGITRANS
          </div>

          <div className="flex items-center gap-2 font-black text-lg sm:text-xl tracking-tighter">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full" />
            FASTDELIVERY
          </div>

          <div className="flex items-center gap-2 font-black text-lg sm:text-xl tracking-tighter">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rotate-45" />
            URBANMOVE
          </div>

          <div className="flex items-center gap-2 font-black text-lg sm:text-xl tracking-tighter">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-sm" />
            SAFEHAUL
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 items-center max-w-4xl mx-auto">

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-primary mb-1">
              <Counter value="5000" suffix="+" />
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">
              Clientes
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-primary mb-1">
              <Counter value="12000" suffix="+" />
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">
              Veículos
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-primary mb-1">
              24h
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">
              Monitoramento
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-primary mb-1">
              GPS
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">
              Alta Precisão
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="text-sm sm:text-primary font-bold text-white hover:text-primary/80 flex items-center gap-2 mx-auto group transition-all cursor-pointer">
            Testar Agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default SocialProof;
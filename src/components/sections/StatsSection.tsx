import React from "react";
import Counter from "../ui/Counter";

const StatsSection = () => {
  const stats = [
    { label: "Clientes Ativos", value: "5000", suffix: "+" },
    { label: "Veículos Rastreados", value: "12000", suffix: "+" },
    { label: "Uptime do Sistema", value: "99", suffix: ".9%" },
    { label: "Suporte Técnico", value: "24", suffix: "h" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary text-white overflow-hidden relative">
      
      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">

          <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.25em] mb-4">
            Nossa Confiabilidade
          </h2>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Números que Comprovam
          </h3>

        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">

          {stats.map((stat, i) => (
            <div key={i} className="text-center">

              <div className="text-4xl sm:text-5xl lg:text-7xl font-black mb-3 sm:mb-4 text-primary">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-[11px] sm:text-sm font-bold uppercase tracking-widest text-white/70">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;
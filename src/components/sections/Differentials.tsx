import React from "react";
import { Check } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Differentials = () => {
  const benefits = [
    "Monitoramento em tempo real",
    "Aplicativo intuitivo e rápido",
    "IA de análise de comportamento",
    "Bloqueio remoto instantâneo",
    "Suporte especializado 24h",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <Card
          className="p-6 sm:p-10 lg:p-16 border-secondary/10"
          rounded="4xl"
          hoverable={false}
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/5 blur-[100px] rounded-full -mr-36 sm:-mr-48 -mt-36 sm:-mt-48" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
            {/* LEFT SIDE */}
            <div className="flex-1 w-full text-center lg:text-left">
              <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                Diferenciais
              </h2>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
                Por que escolher a{" "}
                <span className="text-secondary dark:text-primary">
                  GoTracker
                </span>
                ?
              </h3>

              {/* BENEFITS */}
              <div className="space-y-4 mb-10 max-w-md mx-auto lg:mx-0">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>

                    <span className="text-sm sm:text-base font-semibold text-zinc-700 dark:text-zinc-200">
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="flex justify-center lg:justify-start">
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

            {/* RIGHT SIDE TABLE */}
            <div className="flex-1 w-full">
              <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-zinc-800/50">
                      <th className="p-4 sm:p-6 font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                        Recurso
                      </th>

                      <th className="p-4 sm:p-6 font-bold text-primary text-center text-sm sm:text-base">
                        GoTracker
                      </th>

                      <th className="p-4 sm:p-6 font-bold text-zinc-400 text-center text-sm sm:text-base">
                        Comum
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-zinc-200 dark:divide-white/5">
                    {[
                      { name: "Precisão GPS", gt: "Alta", other: "Baixa" },
                      { name: "App Mobile", gt: "Sim", other: "Não" },
                      { name: "Bloqueio", gt: "Instantâneo", other: "Lento" },
                      { name: "Suporte", gt: "24h", other: "Comercial" },
                      { name: "Inteligência AI", gt: "Sim", other: "Não" },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-300">
                          {row.name}
                        </td>

                        <td className="p-4 sm:p-6 text-xs sm:text-sm font-black text-primary text-center">
                          {row.gt}
                        </td>

                        <td className="p-4 sm:p-6 text-xs sm:text-sm font-medium text-zinc-400 text-center">
                          {row.other}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Differentials;

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import Card from '../ui/Card';

const AITech = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-6">
        <Card 
          className="p-8 md:p-16 border-primary/20"
          rounded="4xl"
          hoverable={false}
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Cpu className="w-4 h-4" /> Inteligência Artificial
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
                Previsão de Comportamento e <span className="text-gradient">Otimização Inteligente</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                Nossa IA analisa padrões de condução em tempo real para alertar sobre comportamentos de risco e sugerir as rotas mais seguras e econômicas. Não apenas rastreamos, nós antecipamos.
              </p>
              <ul className="space-y-4">
                {[
                  "Detecção automática de frenagens bruscas",
                  "Alerta de fadiga do condutor",
                  "Otimização de rotas com base em histórico",
                  "Relatórios de performance semanais"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/ai-dashboard/800/600" 
                  alt="AI Dashboard" 
                  className="w-full h-auto opacity-90 dark:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase">Eficiência de Rota</span>
                      <span className="text-xs font-bold text-emerald-500">+24%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AITech;

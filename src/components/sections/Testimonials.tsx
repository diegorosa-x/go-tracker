import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';

const Testimonials = () => {
  const reviews = [
    {
      name: "Lais Valentin",
      role: "Cliente Google",
      text: "Equipe muito prestativa, atendimento ágil e serviço de qualidade. Recomendo muito.",
      img: "https://picsum.photos/seed/lais/100/100"
    },
    {
      name: "Felipe Longo",
      role: "Cliente Google",
      text: "Aplicativo completo e muito intuitivo. Empresa de confiança.",
      img: "https://picsum.photos/seed/felipe/100/100"
    },
    {
      name: "Raquel Sales",
      role: "Cliente Google",
      text: "Equipe nota dez, ótimo atendimento e prestação de serviços.",
      img: "https://picsum.photos/seed/raquel/100/100"
    },
    {
      name: "Egle Segantim",
      role: "Cliente Google",
      text: "Excelente, extremamente profissionais. Equipamento com ótima precisão.",
      img: "https://picsum.photos/seed/egle/100/100"
    },
    {
      name: "Julio Cesar Mauricio",
      role: "Cliente Google",
      text: "Veículo totalmente seguro. Onde quer que vá você sabe onde está.",
      img: "https://picsum.photos/seed/julio/100/100"
    },
    {
      name: "Sérgio Mendes",
      role: "Cliente Google",
      text: "Ótimo atendimento, fiquei satisfeito com a empresa. Recomendo muito.",
      img: "https://picsum.photos/seed/sergio/100/100"
    },
    {
      name: "Paulo Ascensio",
      role: "Cliente Google",
      text: "Ótima empresa, atendimento excelente e profissionais competentes.",
      img: "https://picsum.photos/seed/paulo/100/100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-zinc-100/50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Depoimentos</h2>
          <h3 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">O que dizem nossos <span className="text-gradient">Clientes</span></h3>
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-600 dark:text-zinc-400 font-bold flex items-center gap-2">
              ⭐ 5.0 de 5 no Google baseado em mais de 60 avaliações
            </p>
            <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline cursor-pointer">
              Ver avaliações no Google
            </button>
          </div>
        </div>

        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Container */}
          <div className="overflow-hidden px-4">
            <motion.div 
              className="flex gap-6"
              animate={{ 
                x: `calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * (24 / visibleCards)}px)` 
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {[...reviews, ...reviews.slice(0, 3)].map((review, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(visibleCards - 1) * 24}px) / ${visibleCards})` }}
                >
                  <Card 
                    className="p-8 h-full flex flex-col justify-between group"
                    rounded="3xl"
                  >
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 italic mb-8 leading-relaxed font-medium">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img 
                        src={review.img} 
                        alt={review.name} 
                        className="w-10 h-10 rounded-full border-2 border-primary/20" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="text-left">
                        <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{review.name}</p>
                        <p className="text-[9px] text-primary uppercase font-black tracking-widest">{review.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full glass border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 rotate-180 group-hover:scale-110 transition-transform" />
            </button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-zinc-300 dark:bg-zinc-700'}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-12 h-12 rounded-full glass border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

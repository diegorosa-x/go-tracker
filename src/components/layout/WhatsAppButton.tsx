import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5519999999999"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 text-white"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-ping" />
    </motion.a>
  );
};

export default WhatsAppButton;

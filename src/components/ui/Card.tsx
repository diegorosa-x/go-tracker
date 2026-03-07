import React from 'react';
import { motion } from 'motion/react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  rounded?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  glass?: boolean;
  border?: boolean;
  key?: React.Key;
}

const Card = ({ 
  children, 
  className = '', 
  hoverable = true, 
  rounded = '2xl',
  glass = true,
  border = true,
  ...props
}: CardProps) => {
  const baseStyles = "relative overflow-hidden transition-all duration-300";
  
  const roundedStyles = {
    xl: "rounded-xl",
    '2xl': "rounded-2xl",
    '3xl': "rounded-[2.5rem]",
    '4xl': "rounded-[3rem]",
    '5xl': "rounded-[4rem]"
  };
  
  const glassStyles = glass ? "glass" : "bg-white dark:bg-zinc-900";
  const borderStyles = border ? "border border-zinc-200 dark:border-white/5" : "";
  const hoverStyles = hoverable ? "hover:shadow-md hover:border-primary/30" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${baseStyles} ${roundedStyles[rounded]} ${glassStyles} ${borderStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'emerald';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
  glow?: boolean;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  glow = false,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all cursor-pointer rounded-xl";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    glass: "glass text-secondary dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/10 border-secondary/20",
    outline: "border border-secondary/20 dark:border-white/10 hover:bg-secondary/5 dark:hover:bg-white/5 text-secondary dark:text-zinc-300",
    emerald: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-2xl"
  };
  
  const glowStyles = glow ? "glow-primary" : "";
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${glowStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

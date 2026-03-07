import React from "react";

type LogoProps = {
  className?: string;
  size?: number;
};

const Logo = ({ className = "", size = 150 }: LogoProps) => {
  return (
    <img
      src="/assets/img/go-tracker-logo.png"
      alt="GO Tracker"
      style={{ height: size }}
      className={`w-auto object-contain ${className}`}
    />
  );
};

export default Logo;
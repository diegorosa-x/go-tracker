import React from "react";

export const Tooltip = ({
  text,
  children,
  position = "left",
}) => {
  const positions = {
    left: "right-full mr-3 top-1/2 -translate-y-1/2",
    right: "left-full ml-3 top-1/2 -translate-y-1/2",
    top: "bottom-full mb-3 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-3 left-1/2 -translate-x-1/2",
  };

  return (
    <div className="group relative inline-flex">
      {children}

      <span
        className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-black px-3 py-1 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 ${positions[position]}`}
      >
        {text}
      </span>
    </div>
  );
};
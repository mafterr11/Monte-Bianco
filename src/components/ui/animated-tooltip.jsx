import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const AnimatedTooltip = ({ children, message }) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const halfWidth = rect.width / 2;
    x.set(offsetX - halfWidth);
  };

  return (
    <div
      className="inline-block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          style={{
            translateX: translateX,
            rotate: rotate,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
          className="absolute -top-8 -left-0 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-gradient-to-t from-[#749db9] to-accent border-accent border z-50 high-shadow px-4 py-2"
        >
          <div className="font-bold text-white-text relative z-30 text-base">
            {message}
          </div>
        </motion.div>
      )}
      {children}
    </div>
  );
};

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const AnimatedTooltip = ({ children, message }) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const halfWidth = rect.width / 2;
    x.set(offsetX - halfWidth);
  };

  return (
    <div
      className="relative inline-block"
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
          className="high-shadow absolute -left-0 -top-8 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md border border-accent bg-linear-to-t from-[#749db9] to-accent px-4 py-2 text-xs"
        >
          <div className="relative z-30 text-base font-bold text-white-text">
            {message}
          </div>
        </motion.div>
      )}
      {children}
    </div>
  );
};

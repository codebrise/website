"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
}

export function ScrollReveal({
  children,
  className,
  delay = 1,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const delaySeconds = delay === 1 ? 0.05 : delay === 2 ? 0.15 : 0.25;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -45px 0px" }}
      transition={{
        duration: 0.75,
        delay: delaySeconds,
        ease: [0.22, 0.8, 0.24, 1],
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}

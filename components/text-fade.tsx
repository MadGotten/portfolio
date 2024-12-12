"use client";
import { motion } from "motion/react";
import React from "react";

export function TextFade({
  children,
  className = "",
  staggerChildren = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE = {
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } },
    hidden: { opacity: 0, y: 18 },
  };
  return (
    <motion.div
      initial="hidden"
      animate={"show"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? <motion.div variants={FADE}>{child}</motion.div> : child,
      )}
    </motion.div>
  );
}

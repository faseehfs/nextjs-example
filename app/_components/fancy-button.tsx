"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FancyButtonProps {
  children: React.ReactNode;
}

const FancyButton = ({ children }: FancyButtonProps) => {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500",
        "ring-0 ring-purple-500/50 hover:ring-2",
      )}
    >
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />

      <span className="relative flex items-center gap-2">{children}</span>
    </Button>
  );
};

export default FancyButton;

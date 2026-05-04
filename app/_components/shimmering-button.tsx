"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShimmeringButtonProps {
  children: React.ReactNode;
}

export default function ShimmeringButton({ children }: ShimmeringButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:cursor-pointer",
      )}
    >
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
}

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LightIcon, DarkIcon } from "@/components/svg";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="w-6 h-6"></span>;
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}

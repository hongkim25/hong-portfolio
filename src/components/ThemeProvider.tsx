"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface PageTheme {
  bg: string;
  text: string;
  navBg: string;
  navText: string;
  footerBg: string;
  footerText: string;
}

const themeColors: Record<string, PageTheme> = {
  "/": {
    bg: "#6017B3",
    text: "#ffffff",
    navBg: "#FF5733",
    navText: "#ffffff",
    footerBg: "#82c924",
    footerText: "#ffffff",
  },
  "/about": {
    bg: "#ffffff",
    text: "#000000",
    navBg: "#015b4e",
    navText: "#ffffff",
    footerBg: "#1e3a5f",
    footerText: "#ffffff",
  },
  "/the-baker": {
    bg: "#f9f7f2",
    text: "#350505",
    navBg: "#6b3405",
    navText: "#ffffff",
    footerBg: "#d89c60",
    footerText: "#ffffff",
  },
  "/tltp": {
    bg: "#e4f2ff",
    text: "#ffffff",
    navBg: "#e332d7",
    navText: "#ffffff",
    footerBg: "#beff32",
    footerText: "#ffffff",
  },
};

const defaultTheme: PageTheme = {
  bg: "#050505",
  text: "#ffffff",
  navBg: "#000000",
  navText: "#ffffff",
  footerBg: "#ffffff",
  footerText: "#000000",
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const theme = themeColors[pathname] || defaultTheme;
    document.documentElement.style.setProperty("--page-bg", theme.bg);
    document.documentElement.style.setProperty("--page-text", theme.text);
    document.documentElement.style.setProperty("--nav-bg", theme.navBg);
    document.documentElement.style.setProperty("--nav-text", theme.navText);
    document.documentElement.style.setProperty("--footer-bg", theme.footerBg);
    document.documentElement.style.setProperty("--footer-text", theme.footerText);
  }, [pathname]);

  return <>{children}</>;
}

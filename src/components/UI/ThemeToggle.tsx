import { Button } from "@heroui/react";
import { useState, useEffect } from "react";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      isIconOnly
      onPress={toggleTheme}
      radius="full"
      variant="solid"
      color="primary"
      className={`absolute right-6 top-6 ${
        isDark
          ? "bg-brown-300 hover:bg-brown-200"
          : "bg-brown-100 hover:bg-brown-200"
      }`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}

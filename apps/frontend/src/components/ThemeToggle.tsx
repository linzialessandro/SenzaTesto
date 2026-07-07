"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const icon = theme === 'dark' 
    ? <Sun className="h-5 w-5 text-gray-200" />
    : theme === 'light'
    ? <Moon className="h-5 w-5 text-gray-800" />
    : <Monitor className="h-5 w-5 text-gray-600 dark:text-gray-300" />;

  const label = theme === 'dark' ? 'Tema chiaro' : theme === 'light' ? 'Tema scuro' : 'Tema di sistema';

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label={label}
      title={label}
    >
      {icon}
    </button>
  );
}

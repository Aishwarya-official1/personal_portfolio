import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

// Reads the saved theme on first load, falling back to 'light'.
function getInitialTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  return saved === 'dark' || saved === 'light' ? saved : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Runs whenever `theme` changes: applies it to the document
  // and persists the choice to localStorage.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside a ThemeProvider');
  return ctx;
}

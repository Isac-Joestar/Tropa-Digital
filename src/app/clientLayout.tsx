'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from '../styles/theme';
import ThemeContext from '../styles/context';
import { GlobalStyle } from '@/styles/GlobalStyles';
import style from './(login)/page.module.css';
import ThemeSwitcher from './components/themeSwitcher/index';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' ? themes.dark : themes.light;
    }
    return themes.light;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme === themes.dark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className={style.themeSwitcher}>
          <ThemeSwitcher toggleTheme={toggleTheme} />
        </div>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
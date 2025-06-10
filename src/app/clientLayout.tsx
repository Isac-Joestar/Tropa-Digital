'use client';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from '../styles/theme';
import ThemeContext from '../styles/context';
import Menu from './components/menu';
import BtnChangeTheme from './components/btnChangeTheme';
import { GlobalStyle } from '@/styles/GlobalStyles';
import style from './page.module.css'
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <div className={style.toggle_theme}>
            {/* <BtnChangeTheme toggleTheme={toggleTheme} /> */}
        </div>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

import React, { createContext, useContext, useMemo, useState } from 'react';

import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const theme = useMemo(() => {
    return themeMode === 'dark' ? darkTheme : lightTheme;
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(previous => (previous === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeMode,
        toggleTheme,
        setThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
};

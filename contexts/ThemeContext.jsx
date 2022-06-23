import React, { useState } from 'react';

export const ThemeContext = React.createContext('light');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const onChange = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ value: theme, onChange: onChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

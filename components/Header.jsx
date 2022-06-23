import { Moon, Sun } from 'phosphor-react';
import { ThemeContext } from '../contexts/ThemeProvider';

export function Header() {
  const renderThemeButton = () => {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <button
            onClick={theme.onChange}
            className="flex items-center gap-2 font-semibold"
          >
            {theme.value === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            {theme.value === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        )}
      </ThemeContext.Consumer>
    );
  };

  return (
    <header className="bg-white p-4 shadow-sm flex justify-between items-center dark:bg-gray-600 dark:shadow-gray-900 dark:text-white transition-colors">
      <h1 className="font-bold text-xl">Where in the world?</h1>
      {renderThemeButton()}
    </header>
  );
}

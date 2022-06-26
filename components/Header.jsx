import { Moon, Sun, SunDim } from 'phosphor-react';
import { ThemeContext } from '../contexts/ThemeContext';

export function Header() {
  return (
    <header className="bg-white px-4 py-6 shadow-sm shadow-shadow-200  dark:bg-gray-600 dark:shadow-gray-800 dark:text-white transition-colors">
      <nav className="flex justify-between items-center max-w-7xl w-full m-auto">
        <h1 className="font-bold text-sm md:text-xl">Where in the world?</h1>

        <ThemeContext.Consumer>
          {theme => (
            <button
              onClick={theme.onChange}
              className="flex items-center text-sm md:text-base gap-2 font-semibold"
            >
              {theme.value === 'light' ? (
                <Moon size={22} />
              ) : (
                <Sun size={22} weight="fill" />
              )}
              {theme.value === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          )}
        </ThemeContext.Consumer>
      </nav>
    </header>
  );
}

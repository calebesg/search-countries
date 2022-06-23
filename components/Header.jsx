import { Moon, Sun } from 'phosphor-react';

export function Header({ theme, onChange }) {
  const changeTheme = () =>
    theme === 'light' ? onChange('dark') : onChange('light');

  const renderThemeButton = () => {
    return (
      <button
        onClick={changeTheme}
        className="flex items-center gap-2 font-semibold"
      >
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    );
  };

  return (
    <header className="bg-white p-4 shadow-sm flex justify-between items-center dark:bg-gray-600 dark:shadow-gray-900 dark:text-white transition-colors">
      <h1 className="font-bold text-xl">Where in the world?</h1>
      {renderThemeButton()}
    </header>
  );
}

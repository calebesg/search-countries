import { ThemeContext } from '../contexts/ThemeContext';
import { Header } from './Header';

export function Page({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ value }) => (
        <div className={`${value} flex flex-col min-h-screen`}>
          <Header />

          <div className="flex-1 dark:bg-gray-700 transition-colors">
            <div className="max-w-7xl w-full m-auto py-8 px-4 xl:px-0">
              {children}
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

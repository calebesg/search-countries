import { ThemeContext } from '../contexts/ThemeProvider';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <ThemeContext.Consumer>
      {({ value }) => (
        <div className={`${value} flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-1 dark:bg-gray-700 transition-colors"></main>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

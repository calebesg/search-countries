import { ThemeContext } from '../contexts/ThemeContext';
import { Header } from '../components/Header';
import { CountryCard } from '../components/CountryCard';

export default function Home() {
  return (
    <ThemeContext.Consumer>
      {({ value }) => (
        <div className={`${value} flex flex-col min-h-screen`}>
          <Header />

          <div className="flex-1 dark:bg-gray-700 transition-colors">
            <div className="max-w-7xl w-full m-auto">
              <div></div>
              <div className="grid grid-cols-4 gap-16 mt-16">
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

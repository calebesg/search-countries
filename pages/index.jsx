import { useState } from 'react';
import { Header } from '../components/Header';

export default function Home() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`${theme} flex flex-col min-h-screen`}>
      <Header theme={theme} onChange={setTheme} />
      <main className="flex-1 dark:bg-gray-700 transition-colors"></main>
    </div>
  );
}

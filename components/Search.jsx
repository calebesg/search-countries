import { MagnifyingGlass } from 'phosphor-react';

export function Search() {
  return (
    <div className="flex items-center gap-6 bg-white dark:bg-gray-600 shadow-smooth rounded overflow-hidden px-6 h-14 md:max-w-[480px] w-full text-gray-400 dark:text-white transition-colors">
      <MagnifyingGlass size={20} />
      <input
        className="flex-1 h-full text-gray-900 outline-0 text-sm bg-transparent dark:text-white dark:placeholder:text-gray-200"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

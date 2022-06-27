import Link from 'next/link';

export function CountryCard() {
  return (
    <Link href="/country/1234">
      <div className="rounded overflow-hidden sm:w-[264px] bg-white dark:bg-gray-600 transition-colors shadow-card cursor-pointer">
        <img
          src="https://imagepng.org/wp-content/uploads/2017/04/bandeira-do-brasil.png"
          alt="Brazil"
        />
        <div className="p-6 dark:text-gray-200">
          <strong className="dark:text-white text-lg">Brazil</strong>
          <div className="mt-3 text-sm leading-7">
            <div>
              <span className="font-bold">Population:</span> 215.000.000
            </div>
            <div>
              <span className="font-bold">Region:</span> America
            </div>
            <div>
              <span className="font-bold">Capital:</span> Brasília
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

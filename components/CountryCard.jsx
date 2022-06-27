import Link from 'next/link';

export function CountryCard({ country }) {
  return (
    <Link href={`/country/${country.name.common}`}>
      <div className="rounded overflow-hidden sm:w-[264px] bg-white dark:bg-gray-600 transition-colors shadow-card cursor-pointer">
        <img
          className="w-full h-[160px] object-cover"
          src={country?.flags.svg}
          alt="Brazil"
        />
        <div className="p-6 dark:text-gray-200">
          <strong className="dark:text-white text-lg">
            {country?.name.common}
          </strong>
          <div className="mt-3 text-sm leading-7">
            <div>
              <span className="font-bold">Population:</span>{' '}
              {country?.population}
            </div>
            <div>
              <span className="font-bold">Region:</span> {country?.region}
            </div>
            <div>
              <span className="font-bold">Capital:</span> {country?.capital[0]}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

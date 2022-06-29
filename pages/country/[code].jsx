import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Page } from '../../components/Page';

import { getCountryByCode } from '../../functions/countries';

export default function Description() {
  const [country, setCountry] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getCountry = async function () {
      const data = await getCountryByCode(router.query.code);

      console.log(data);

      const serialized = {
        name: data.name,
        flag: data.flags.svg,
        capital: data.capital,
        languages: Object.values(data.languages).join(', '),
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        tld: data.tld[0],
        borders: data.borders,
        currencies: Object.entries(data.currencies)[0][1],
      };

      setCountry(serialized);
    };

    getCountry();
  }, [router?.query]);

  function renderCountryDetail() {
    if (!country) return null;

    return (
      <div className="mt-12 flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-28">
        <img src={country.flag} alt={country.name.common} loading="lazy" />

        <div className="flex flex-col items-start justify-center gap-8 dark:text-gray-200">
          <h2 className="text-2xl font-bold dark:text-white">
            {country.name.common}
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 -mt-2 lg:mt-0 w-full items-start justify-between text-sm lg:text-base">
            <div className="font-semibold leading-7">
              <div>
                Native Name:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.name.official}
                </span>
              </div>
              <div>
                Population:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.population}
                </span>
              </div>
              <div>
                Region:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.region}
                </span>
              </div>
              <div>
                Sub region:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.subregion}
                </span>
              </div>
              <div>
                Capital:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.capital || 'not informed'}
                </span>
              </div>
            </div>

            <div className="font-semibold leading-7 text-sm lg:text-base">
              <div>
                Top Level Domain:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.tld}
                </span>
              </div>
              <div>
                Currencies:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.currencies.name}
                </span>
              </div>
              <div>
                Languages:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  {country.languages}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 lg:mt-8">
            <strong className="flex-shrink-0">Border countries:</strong>

            <motion.div
              className="flex flex-wrap gap-2 dark:text-gray-300 text-xs"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                hidden: { opacity: 0 },
              }}
            >
              {country.borders.map((value, index) => (
                <Link key={index} href={`/country/${value.cca3}`}>
                  <motion.span
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -10 },
                    }}
                    className="bg-white rounded px-4 py-1 dark:bg-gray-600 text-xs shadow-md cursor-pointer transition-colors"
                  >
                    {value.name.common}
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Page>
      <Link href="/">
        <button className="flex items-center px-6 py-2 rounded shadow-smooth bg-white dark:bg-gray-600 dark:text-white gap-2 transition-colors">
          <ArrowLeft size={18} />
          Back
        </button>
      </Link>

      {renderCountryDetail()}
    </Page>
  );
}

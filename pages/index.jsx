import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { CountryCard } from '../components/CountryCard';
import { Search } from '../components/Search';
import { RegionSelect } from '../components/RegionSelect';
import { Page } from '../components/Page';

import {
  getAllCountries,
  getCountriesByRegion,
  getCountryByName,
} from '../functions/countries';

export async function getStaticProps() {
  const data = await getAllCountries();

  return {
    props: {
      countries: data,
    },
  };
}

export default function Home(props) {
  const [countries, setCountries] = useState([]);
  const [regionSelected, setRegionSelected] = useState();

  useEffect(() => {
    setCountries(props.countries.slice(0, 20));
  }, [props.countries]);

  useEffect(() => {
    const getCountries = async () => {
      setCountries([]);
      const res = await getCountriesByRegion(regionSelected.name);
      setCountries(res);
    };

    regionSelected && getCountries();
  }, [regionSelected]);

  async function searchTerm(term = '') {
    setCountries([]);
    const res = await getCountryByName(term);
    setCountries(res);
  }

  function renderCountries() {
    return countries.map((country, index) => (
      <motion.li
        key={index}
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
            },
          },
          hidden: {
            opacity: 0,
            scale: 0,
          },
        }}
      >
        <CountryCard country={country} />
      </motion.li>
    ));
  }

  return (
    <Page>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <Search onSubmit={searchTerm} />
        <RegionSelect
          value={regionSelected}
          onChange={setRegionSelected}
          defaultLabel="Filter by Region"
        />
      </div>

      {countries && (
        <motion.ul
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.04,
              },
            },
            hidden: {},
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid px-8 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[75px] mt-12"
        >
          {renderCountries()}
        </motion.ul>
      )}
    </Page>
  );
}

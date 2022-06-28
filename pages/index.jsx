import { useEffect, useState } from 'react';

import { CountryCard } from '../components/CountryCard';
import { Search } from '../components/Search';
import { RegionSelect } from '../components/RegionSelect';
import { Page } from '../components/Page';

import { getAllCountries } from '../functions/countries';

export async function getStaticProps() {
  const data = await getAllCountries(
    'name',
    'capital',
    'region',
    'population',
    'flags',
    'cca3'
  );

  return {
    props: {
      countries: data,
    },
  };
}

export default function Home(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries.slice(0, 20));
  }, [props.countries]);

  function renderCountries() {
    return countries.map((country, index) => (
      <CountryCard key={index} country={country} />
    ));
  }

  return (
    <Page>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <Search />
        <RegionSelect defaultLabel="Filter by Region" />
      </div>

      {countries && (
        <div className="grid px-8 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[75px] mt-12">
          {renderCountries()}
        </div>
      )}
    </Page>
  );
}

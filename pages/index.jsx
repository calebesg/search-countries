import { CountryCard } from '../components/CountryCard';
import { Search } from '../components/Search';
import { RegionSelect } from '../components/RegionSelect';
import { Page } from '../components/Page';

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <Search />
        <RegionSelect defaultLabel="Filter by Region" />
      </div>

      <div className="grid px-8 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-8">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </Page>
  );
}

import { CountryCard } from '../components/CountryCard';
import { Search } from '../components/Search';
import { RegionSelect } from '../components/RegionSelect';
import { Page } from '../components/Page';

export default function Home() {
  return (
    <Page>
      <div className="flex justify-between">
        <Search />
        <RegionSelect defaultLabel="Filter by Region" />
      </div>

      <div className="grid grid-cols-4 gap-16 mt-8">
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

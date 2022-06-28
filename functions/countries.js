import restcontries from '../libs/restcontries';

export async function getAllCountries(...fields) {
  const response = await restcontries.get('/all', {
    params: {
      fields: 'name,capital,region,population,flags,cca3',
    },
  });

  if (response.status !== 200) return [];
  return response.data;
}

export async function getCountriesByRegion(region = 'america') {
  const filter = String(region).toLowerCase();

  const response = await restcontries.get(`/region/${filter}`, {
    params: {
      fields: 'name,capital,region,population,flags,cca3',
    },
  });

  if (response.status !== 200) return [];
  return response.data;
}

export async function getCountryByName(name) {
  const response = await restcontries.get(`/name/${name}`, {
    params: {
      fullText: true,
      fields: 'name,capital,region,population,flags,cca3',
    },
  });

  if (response.status !== 200) return null;
  return response.data;
}

export async function getCountryByCode(code) {
  const response = await restcontries.get(`/alpha/${code}`, {
    params: {
      fullText: true,
      fields:
        'name,capital,population,tld,currencies,region,subregion,languages,flags,borders',
    },
  });

  if (response.status !== 200) return null;

  const borders = await getNamesByCode(response.data.borders);
  return { ...response.data, borders: borders };
}

async function getNamesByCode(arrCode) {
  const response = await restcontries.get(`/alpha`, {
    params: {
      codes: arrCode.join(','),
      fields: 'name,cca3',
    },
  });

  if (response.status !== 200) return [];
  return response.data;
}

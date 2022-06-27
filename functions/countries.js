import restcontries from '../libs/restcontries';

export async function getAllCountries(...fields) {
  const response = await restcontries.get('/all', {
    params: {
      fields: fields.join(','),
    },
  });

  if (response.status !== 200) return [];

  return response.data;
}

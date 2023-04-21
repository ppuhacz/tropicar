import base from '../airtableClient'

const getRecent = async (maxRecords: number | undefined) => {

  const offers = await base('Offers')
    .select({
      sort: [{field: 'ID', direction: 'desc'}],
      maxRecords
    })
    .firstPage();

  return offers.map((offer) => offer.fields);
}


export default getRecent
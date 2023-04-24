import base from '../airtableClient'

const getRecent = async (maxRecords?: number | undefined) => {

  let options: object = {
    sort: [{field: 'ID', direction: 'desc'}],
  }

  // if maxRecords is provided, then fetch a given number of offers
  if (maxRecords) {
    options = {
      sort: [{field: 'ID', direction: 'desc'}],
      maxRecords
    }
  }

  const offers = await base('Offers')
    .select(options)
    .firstPage();

  return offers.map((offer) => offer.fields);
}

export default getRecent
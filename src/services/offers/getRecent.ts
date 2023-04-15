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

// getRecent(10) zwróci 10 elementów
// w dokumentacji jest przygotowana paginacja

import base from '../airtableClient'

const getRecent = async (maxRecords?: number | undefined) => {

  if (typeof maxRecords === 'number') {
    const offers = await base('Offers')
    .select({
      sort: [{field: 'ID', direction: 'desc'}],
      maxRecords
    })
    .firstPage();

  return offers.map((offer) => offer.fields);
  } else { // if maxRecord is not provided it will fetch all offers instead
    const offers = await base('Offers')
    .select({
      sort: [{field: 'ID', direction: 'desc'}],
    })
    .firstPage();

  return offers.map((offer) => offer.fields);
  }
}



export default getRecent

// getRecent(10) zwróci 10 elementów
// w dokumentacji jest przygotowana paginacja

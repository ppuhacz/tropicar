import base from '../airtableClient'

const getCarInfo = async (pathname: string) => {
  console.log(pathname)
  let options: object = {
    filterByFormula: `{slug} = "${pathname}"`,
  }

  const offers = await base('Offers')
    .select(options)
    .firstPage();

  return offers[0].fields
}

export default getCarInfo
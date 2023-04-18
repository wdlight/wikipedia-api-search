
export default async function getWikiResults(searchTerm: string) {

  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
})

  // const sUrl = `https://en.wikipedia.org/w/api.php?${searchParams}`;
  // const response = await fetch(sUrl);  
  // const data = await response.json()

  // return data;


  const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)

    return response.json()
}
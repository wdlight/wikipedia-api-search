// wikipedia api result type
// https://www.mediawiki.org/wiki/API:Main_page


type Result = {
  pageid: number,
  ns: number,
  title: string,
  extract: string,
  thumbnail: {
    source: string,
    width: number,
    height: number
  },
  pageimage: string
}

// type SearchResult = {
//   query?: {
//     pages?: Result[]    
//   }
// }

type SearchResult = {
  query?: {
    pages?:{
      [pageid as string]?: Result
    }
  }
}


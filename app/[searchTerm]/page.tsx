import React from 'react'
import getWikiResults from '@/lib/getWikiResults'
import Item from '../components/item'


type Props = { params: { searchTerm: string }}

export async function generateMetadata( { params: {searchTerm} }: Props) {
  const wikiData: Promise<SearchResult>  = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll( "%20", ' ')
  //const results: Result[] | undefined = data.query?.pages
  const results: Result[] = data.query?.pages ? Object.values( data.query?.pages ) : []

  if (!results) {
    return {
      title: `Search Result : ${displayTerm} Not Found`,     
    }
  }

  return {
    title: `Search Result : ${displayTerm}`,
    description: `Search Result : ${displayTerm}`,
  }
}


export default async function SeachResults({ params: {searchTerm}}: Props) {  
  const displayTerm = searchTerm.replaceAll( "%20", ' ')
  const wikiData: Promise<SearchResult>  = getWikiResults(searchTerm)
  const data = await wikiData

  const results: Result[] =data.query?.pages ? Object.values( data.query?.pages ) : []
  console.log ( " :circle 🔴🔴")
  console.log ( results )
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {
        results 
        ? results.map( result => (
            <div key={result.pageid}>              
              <Item key={result.pageid} result={result} />
            </div>
        )  )
        :
        (
          <div className="bg-white shadow rounded-lg p-4 my-5">
            <h2 className="text-xl font-bold">{`${displayTerm} Not Found`}</h2>
          </div>
        
        )
      }
    </main>
  )

  return content
}
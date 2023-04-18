import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  result: Result
}

export default function Item( { result }: Props) {
  const itemText =
    <div className="flex flex-col justify-center">
      <h2>
        <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`}         
        target="blank"
        className="text-xl font-bold underline">
          {result.title}
        </Link>
      </h2>
      <p className="text-gray-600">{result.extract}</p>
      
    </div>
  
  const content = result?.thumbnail?.source
    ? (
      <article className="m-4 max-w-lg">

        <div className="flex flex-row gap-4">
          <img
            src={result.thumbnail.source} 
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
            />
          
        </div>
        {itemText}
      </article>
    )
    : 
    <article className="m-4 max-w-lg">
      {itemText}
    </article>
    
  return content
}

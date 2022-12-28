import { useState } from 'react';
import { IHighlightsBooks } from '../../share/Interface/IHighlightsBooks';
import { BookCard } from '../BookCard'
import { Loading } from '../Loading/Index';

// Error:
// props highlightsBooks: (parameter) highlightsBooks: any
// Property 'highlightsBooks' does not exist on type 'IHighlightsBooks'.ts(2339)
// Solution:
// declare component props and assing highlightsBooks to it

interface HighlightsBooksProps {
  highlightsBooks: IHighlightsBooks[];
}

export const HighlightsBooks = ({highlightsBooks}: HighlightsBooksProps) => {
  const [selectedBook, setSelectedBook] = useState(highlightsBooks[1].id)
  const result = highlightsBooks.filter((book: IHighlightsBooks) => book.id === selectedBook)

  return (
    <section>
      <h2 className='font-bold text-lg leading-7 text-center text-orange-500 pt-5 pb-2'>Últimos Lançamentos</h2>
      <div className='bg-gray-300 pb-7'>
        <div className='flex pt-2 pb-12'>
          {highlightsBooks.map((item: IHighlightsBooks) => 
            <img 
              src={item.imagemCapa} 
              alt="Capa do livro" 
              key={item.id} 
              className='w-1/3'
              onClick={() => setSelectedBook(item.id)}
            />
          )}
        </div>
        {result.length === 0 
          ? 
          <Loading /> 
          : 
          <BookCard 
            bookTitle={result[0].titulo} 
            bookSynopsis={result[0].sobre} 
            bookAuthor={result[0].autor} 
            bookPrice={result[0].opcoesCompra[0].preco.toFixed(2).toString().replace(".", ",")} 
            selectedBag={false} 
            selectedFavorite={false}
          />
          }
      </div>
    </section>
  )
}
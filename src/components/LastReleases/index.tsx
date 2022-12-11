import { useState } from 'react';
import { ILastReleases } from '../../share/Interface/ILastReleases';
import { BookCard } from '../BookCard'
import { Loading } from '../Loading/Index';

export const LastReleases = ({lastReleases}) => {
  const [selectedBook, setSelectedBook] = useState(5)
  const result = lastReleases.filter(book => book.id === selectedBook)

  return (
    <section>
      <h2 className='font-bold text-lg leading-7 text-center text-orange-500 pt-5 pb-2'>Últimos Lançamentos</h2>
      <div className='bg-gray-300 pb-7'>
        <div className='flex pt-2 pb-12'>
          {lastReleases.map((item: ILastReleases) => 
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
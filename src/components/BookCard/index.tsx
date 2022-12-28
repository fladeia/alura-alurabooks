import { Bag, HeartStraight } from 'phosphor-react'
import bagSelected from '../../assets/images/bagSelected.svg'
import favoriteSelected from '../../assets/images/favoriteSelected.svg'
import { Button } from '../Button'

interface BookCardProps {
  bookTitle: string;
  bookSynopsis: string;
  bookAuthor: string;
  bookPrice: string;
  selectedBag: boolean;
  selectedFavorite: boolean;
}

export const BookCard = ({ bookTitle, bookSynopsis, bookAuthor, bookPrice, selectedBag, selectedFavorite }: BookCardProps) => {
  return (
    <div className='w-full max-w-sm bg-white m-auto rounded-xl tablet:max-w-3xl desktop:max-w-xl flex flex-col tablet:flex-row justify-between gap-4 p-12 shadow-lg shadow-black/50'>
      <section className='flex-1'>
        <h4 className='font-bold text-base leading-6 desktop:text-3xl desktop:leading-[48px] text-orange-500 mb-4'>Sobre o livro:</h4>
        <h5 className='font-bold text-lg leading-7 text-blue-700 mb-6'>{bookTitle}</h5>
        <p className='text-sm tablet:text-base desktop:text-sm text-black/80 mb-2'>{bookSynopsis}</p>
        <h6 className='text-sm  text-black/80 mb-10'>Por: {bookAuthor}</h6>
        <small className='block text-sm text-black/60'>A partir de:</small>
        <span className='font-bold text-2xl tablet:text-4xl text-blue-700 leading-[54px]'>R$ {bookPrice}</span>
      </section>
      <section className='flex tablet:flex-col justify-between'>
        <div className='flex gap-4 justify-end'>
          <Bag size={32} />
          <HeartStraight size={32} />
        </div>
        <Button
          small
          handleClick={() => console.log('book card handleClick')}
        >
          Comprar
        </Button>
      </section>
    </div>
  )
}
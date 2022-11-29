import { useState } from "react";

interface BookFormatProps {
  bookType: string;
  bookPrice: string;
  bookFormat: string;
  selected: boolean;
  small?: boolean;
}

export const BookFormat = ({bookType, bookPrice, bookFormat, small, selected}: BookFormatProps) => {
  // const [selected, SetSelected] = useState(false)
  const bookFormatInactive = 'px-12 py-2 rounded-lg text-center border-2 text-orange-500 border-orange-500 bg-white'
  const bookFormatSelected = 'px-12 py-2 rounded-lg text-center text-white bg-gradient-to-r from-blue-700 to-blue-200'
  const bookFormatSmall = 'px-2'

  // function handleClick() {
  //   !selected ? SetSelected(true) : SetSelected(false)
  // }


  return (
    <button 
      // onClick={handleClick}
      className={`${selected ? bookFormatSelected : bookFormatInactive} ${small && bookFormatSmall}`}
    >
      <div className="text-xs font-normal ">{bookType}</div>
      <div className="font-bold py-2 ">R$ {bookPrice}</div>
      <div className={`text-xs font-normal ${selected ? 'text-white' : 'text-black'}`}>{bookFormat}</div>
    </button>
  )
}
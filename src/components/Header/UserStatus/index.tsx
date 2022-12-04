import favorite from '../../../assets/images/favorite.svg'
import user from '../../../assets/images/user.svg'
import bag from '../../../assets/images/bag.svg'
import { LoginStatus } from '../../../share/Interface/login'
import { Modal } from '../../Modal'
import { useState } from 'react'

export const UserStatus = ({login}: LoginStatus) => {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    openModal ? setOpenModal(false) : setOpenModal(true)
    console.log(openModal)
  }

  return (
    <div className='flex items-center gap-4 tablet:gap-14 desktop:gap-4'>
      <img src={favorite} alt="Favoritos" className='block tablet:hidden' />
      <div className={`flex items-center gap-2  tablet:${!login && 'hidden'}`}>
        <img src={bag} alt="Minha Sacola" />
        <span className='hidden desktop:block'>Minha Sacola</span>
      </div>
      <div
        onClick={!login ? handleClick : () => console.log('Dropdown')}
        className='flex items-center gap-2'
      >
        <img src={user} alt="Meu Perfil" />
        <span className='hidden desktop:block'>{login ? 'Meu Perfil' : 'Login'}</span>
      </div>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
    </div>
  )
}
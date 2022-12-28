import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Modal } from '../../Modal'
import { LoginStatus } from '../../../share/Interface/login'
import { Bag, HeartStraight, SignOut, UserCircle } from 'phosphor-react'

export const UserStatus = ({isLoggedIn, setIsLoggedIn}: LoginStatus) => {
  const [openModal, setOpenModal] = useState(false)
  const navitate = useNavigate()

  const handleClick = () => {
    openModal ? setOpenModal(false) : setOpenModal(true)
  }

  const handleBag = () => {
    console.log('bag')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navitate('/')
  }

  return (
    <div className='flex items-center gap-4 tablet:gap-8 '>
      {isLoggedIn 
      ? 
      <>
        <div
          onClick={!isLoggedIn ? handleClick : () => console.log('Dropdown')}
          className='flex items-center gap-2'
        >
          <HeartStraight size={32} />
          <span className='hidden desktop:block'>Favoritos</span>
        </div>

        <div className={`flex items-center gap-2  tablet:${!isLoggedIn && 'hidden'}`}>
          <Link to='/account'>
           <Bag size={32} onClick={handleBag}/>
          </Link>
          <span className='hidden desktop:block'>Minha Sacola</span>
        </div>

        <div
          onClick={!isLoggedIn ? handleClick : () => console.log('Dropdown')}
          className='flex items-center gap-2'
        >
          <UserCircle size={32} />
          <span className='hidden desktop:block'>Meu Perfil</span>
        </div>
        
        <div
          onClick={handleLogout}
          className='flex items-center gap-2'
        >
          <SignOut size={32} />
          <span className='hidden desktop:block'>Logout</span>
        </div>
      </>
      :
      <div
        onClick={handleClick}
        className='flex items-center gap-2'
      >
        <UserCircle size={32} />
        <span className='hidden desktop:block'>Login</span>
      </div>
      }
      {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
    </div>
  )
}
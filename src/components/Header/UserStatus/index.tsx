import favorite from '../../../assets/images/favorite.svg'
import user from '../../../assets/images/user.svg'
import bag from '../../../assets/images/bag.svg'
import { LoginStatus } from '../../../share/Interface/login'

export const UserStatus = ({login}: LoginStatus) => {
  return (
    <div className='flex items-center gap-4 tablet:gap-14 desktop:gap-4'>
      <img src={favorite} alt="Favoritos" className='block tablet:hidden' />
      <div className={`flex items-center gap-2  tablet:${!login && 'hidden'}`}>
        <img src={bag} alt="Minha Sacola" />
        <span className='hidden desktop:block'>Minha Sacola</span>
      </div>
      <div className='flex items-center gap-2'>
        <img src={user} alt="Meu Perfil" />
        <span className='hidden desktop:block'>Meu Perfil</span>
      </div>
    </div>
  )
}
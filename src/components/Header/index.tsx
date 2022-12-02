import { Logo } from './Logo'
import { Menu } from './Menu'
import { UserStatus } from './UserStatus'
import { LoginStatus } from '../../share/Interface/login'

export const Header = ({login}: LoginStatus) => {
  return (
    <header className='w-full max-w-[1728px] flex items-center justify-between px-10 tablet:px-20 py-6 m-auto'>
      <div className='flex items-center gap-2'>
        <Logo />
        <Menu login={login}/>
      </div>
      <UserStatus login={login}/>
    </header>
  )
}
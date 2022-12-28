import { Logo } from './Logo'
import { Menu } from './Menu'
import { UserStatus } from './UserStatus'
import { LoginStatus } from '../../share/Interface/login'

export const Header = ({isLoggedIn, setIsLoggedIn}: LoginStatus) => {
  return (
    <header className='w-full h-20 max-w-[1728px] flex items-center justify-between px-10 mx-auto tablet:px-20 py-6'>
      <div className='flex items-center gap-2'>
        <Logo />
        <Menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
      <UserStatus isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </header>
  )
}
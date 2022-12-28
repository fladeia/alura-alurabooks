import logo from '../../../assets/images/logo.svg'
import aluraBooks from '../../../assets/images/aluraBooks.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/' className='tablet:flex tablet:items-center tablet:gap-2'>
      <img 
        src={logo} 
        alt="Logotipo Alura Books" 
      />
      <img 
        src={aluraBooks} 
        alt="Alura books" 
        className='hidden tablet:block'
      />
    </Link>
  )
}
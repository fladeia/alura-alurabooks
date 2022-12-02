import logo from '../../../assets/images/logo.svg'
import aluraBooks from '../../../assets/images/aluraBooks.png'

export const Logo = () => {
  return (
    <>
      <img 
        src={logo} 
        alt="Logotipo Alura Books" 
      />
      <img 
        src={aluraBooks} 
        alt="Alura books" 
        className='hidden tablet:block'
      />
    </>
  )
}
import logo from '../../assets/images/logo.svg'
import aluraBooks from '../../assets/images/aluraBooks.png'
import user from '../../assets/images/user.svg'
import bag from '../../assets/images/bag.svg'

export const Header = () => {
  return (
    <header className='w-full max-w-[1728px] flex items-center justify-between px-20 py-6 m-auto'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="Logotipo Alura Books" />
        <img src={aluraBooks} alt="Alura books" />
        <div>
        <ul className='flex items-center gap-4 ml-8'>
          <li>Categorias</li>
          <li>Favoritos</li>
          <li>Minha Estante</li>
        </ul>
      </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2'>
          <img src={bag} alt="Minha Sacola" />
          <span>Minha Sacola</span>
        </div>
        <div className='flex items-center gap-2'>
          <img src={user} alt="Meu Perfil" />
          <span>Meu Perfil</span>
        </div>
      </div>
    </header>
  )
}
import { LoginStatus } from '../../../share/Interface/login'

export const Menu = ({isLoggedIn}: LoginStatus) => {
  return (
    <div className="hidden tablet:block">
      <ul className='flex items-center gap-4 ml-8'>
        <li>Categorias</li>
        {
          isLoggedIn && (
            <>
              <li>Favoritos</li>
              <li>Minha Estante</li>
            </>
          )
        }
      </ul>
    </div>
  )
}
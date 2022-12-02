import { LoginStatus } from '../../../share/Interface/login'

export const Menu = ({login}: LoginStatus) => {

  console.log(login)
  return (
    <div className="hidden tablet:block">
      <ul className='flex items-center gap-4 ml-8'>
        <li>Categorias</li>
        {
          login && (
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
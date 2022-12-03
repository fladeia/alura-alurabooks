import loginImage from '../../assets/images/loginSignUp.svg'
import loginClose from '../../assets/images/loginClose.svg'

export const Modal = () => {
  return (
    <div className="w-full h-screen flex justify-center items-start bg-gray-600/80 absolute inset-0">
      <div className="w-[90%] tablet:flex tablet:w-[85%] desktop:w-[60%] mt-36 p-6 bg-white rounded-2xl">
        <div className='flex justify-center items-center mb-6'>
          <figure className='w-56 desktop:w-80' >
            <img src={loginImage} alt="Monitor com tela de login e ao lado um usuário com uma chave na mão" />
          </figure>
        </div>
        <div>
          <div className='flex justify-between'>
            <strong className='font-bold text-lg text-orange-500 leading-6'>Login</strong>
            <img src={loginClose} alt="Fechar modal" className='w-7 h-7'/>
          </div>
          input
        </div>
      </div>
    </div>
  )
}
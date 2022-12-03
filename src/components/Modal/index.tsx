import { useState } from 'react'
import loginImage from '../../assets/images/loginSignUp.svg'
import loginClose from '../../assets/images/loginClose.svg'
import { InputField } from '../InputField'
import { Button } from '../Button'

export const Modal = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(name)
  console.log(email)

  return (
    <div className="w-full h-screen flex justify-center items-start bg-gray-600/80 absolute inset-0">
      <div className="w-[90%] tablet:flex tablet:w-[85%] desktop:w-[60%] mt-36 p-6 bg-white rounded-2xl">
        <div className='flex justify-center items-center mb-6 mr-6'>
          <figure className='w-56 desktop:w-80' >
            <img src={loginImage} alt="Monitor com tela de login e ao lado um usuário com uma chave na mão" />
          </figure>
        </div>
        <div className='flex-1'>
          <div className='flex justify-between mb-6'>
            <strong className='font-bold text-lg text-orange-500 leading-6'>Login</strong>
            <img src={loginClose} alt="Fechar modal" className='w-7 h-7'/>
          </div>
          <div className='flex flex-col gap-3 mb-3'>
            <InputField
              inputLabel='E-mail'
              inputType='email'
              value={email}
              placeholder='Digite seu e-mail'
              onChange={setEmail}
            />
            <InputField
              inputLabel='Senha'
              inputType='password'
              value={password}
              onChange={setPassword}
              placeholder='° ° ° ° ° ° ° °'
            />
          </div>
          <div className='flex justify-between items-center'>
            <a 
              href="#"
              className='text-xs border-b border-b-black'
            >
                Esqueci minha senha
              </a>
            <Button small>
              Fazer Login
            </Button>
          </div>
          <div className='my-4 border-b border-b-black'></div>
          <div className='flex justify-between items-center'>
            <a 
              href="#"
              className='font-bold text-sm'
            >
                Ainda não tem uma conta?
              </a>
            <Button small>
              Criar conta
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
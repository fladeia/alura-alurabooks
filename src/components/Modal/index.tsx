import { useState } from 'react'
import loginImage from '../../assets/images/loginSignUp.svg'
import loginClose from '../../assets/images/loginClose.svg'
import { InputField } from '../InputField'
import { Button } from '../Button'
import axios from 'axios'

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({setOpenModal}: ModalProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [complement, setComplement] = useState('')
  const [cep, setCep] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signup, setSignup] = useState(false)

 const openModal = () => {
  setOpenModal(false)
 }

 const SignupSubmit = () => {
  axios.post('http://localhost:8000/public/registrar', {
    name,
    email,
    address,
    complement,
    cep,
    password
  })
  .then(function (response) {
    console.log(response)
    alert('cadastrado...')
    setName('')
    setEmail('')
    setAddress('')
    setComplement('')
    setCep('')
    setPassword('')
    setConfirmPassword('')
    openModal()
  })
  .catch(function (error) {
    console.log(error)
  })
 }

 const loginSubmit = () => {
  // event.preventDefault()
  axios.post('http://localhost:8000/public/login', {
    email,
    password
  })
  .then((response) => {
    localStorage.setItem('token', response.data.access_token)
    openModal()
    console.log(response)
  })
  .catch((error) => {
    error?.response?.data?.message ? console.log(error.response.data.message) : console.log('Entre em contato com o administrador')
    console.log(error)
  })
 }

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
            <img 
              src={loginClose} 
              alt="Fechar modal" 
              className='w-7 h-7'
              onClick={openModal}
            />  {/*fechar modal */}
          </div>
          {!signup ? <div>
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
              <Button 
                small
                handleClick={loginSubmit}
                >
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
              <Button 
                small
                handleClick={setSignup}
              >
                Criar conta
              </Button>
            </div>
          </div>
          :
          <div className='flex flex-col gap-3 mb-3'>
            <InputField 
              inputLabel='Nome'
              inputType='text'
              value={name}
              placeholder='Digite seu nome'
              onChange={setName}
            />
              <InputField
                inputLabel='E-mail'
                inputType='email'
                value={email}
                placeholder='Digite seu e-mail'
                onChange={setEmail}
              />
              <InputField
                inputLabel='Endereço'
                inputType='text'
                value={address}
                placeholder='Digite o nome da rua'
                onChange={setAddress}
              />
              <div className='flex gap-4'>
                <InputField
                  inputLabel='Complemento'
                  inputType='text'
                  value={complement}
                  placeholder='Apto/casa, bloco'
                  onChange={setComplement}
                  small
                />
                <InputField
                  inputLabel='CEP'
                  inputType='text'
                  value={cep}
                  placeholder='Digite o CEP'
                  onChange={setCep}
                  small
                />
              </div>
              <InputField
                inputLabel='Senha'
                inputType='password'
                value={password}
                onChange={setPassword}
                placeholder='° ° ° ° ° ° ° °'
              />
              <InputField
                inputLabel='Confirmar senha'
                inputType='password'
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder='° ° ° ° ° ° ° °'
              />
              <Button
                small
                center
                handleClick={SignupSubmit}
              >
                Cadastrar
              </Button>
          </div>}
        </div>
      </div>
    </div>
  )
}
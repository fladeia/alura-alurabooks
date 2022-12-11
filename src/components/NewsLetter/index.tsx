import { useState } from "react"
import { InputField } from "../InputField"

export const NewsLetter = () => {
  const [email, setEmail] = useState('')
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h2 className="font-bold text-lg leading-6 mb-2">Fique por dentro das novidades!</h2>
        <p>Atualizações de e-books, novos livros, promoções e outros.</p>
      </div>
      <InputField 
        inputLabel=""
        inputType="email"
        value={email}
        placeholder='Cadastre seu e-mail'
        onChange={setEmail}
      />
    </div>
  )
}
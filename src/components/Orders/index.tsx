import axios from "axios"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { http } from "../../http"
import { Button } from "../Button"

export const Orders = () => {

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    axios.get('http://localhost:8000/pedidos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  },[])

  return (
    <section className="flex flex-col px-4 mb-6">
      <div className="order mb-5">
        <h4 className="font-bold text-lg leading-7 mb-7">Pedido</h4>
         <span className="block font-bold leading-6 mb-4">Resumo da Compra</span>
         <ul>
          <li>Pedido: <span>89019041</span></li>
          <li>Data do Pedido: <span>26/05/2022</span></li>
          <li>Valor total: <span>48,00</span></li>
          <li>Entrega realizada em: <span>30/05/2022</span></li>
         </ul>
      </div>
      <Button 
        small
        center
        full
        handleClick={() => console.log('Detalhe do pedido')}
      >
        Detalhe
      </Button>
    </section>
  )
}
import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { http } from "../../http"
import { IOrders } from "../../share/Interface/IOrders"
import { Button } from "../Button"
import { token } from "../../utils/token"

export const Orders = () => {
  const [orders, setOrders] = useState<IOrders[]>([])

  useEffect(() => {
    axios.get('http://localhost:8000/pedidos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => setOrders(response.data))
      .catch(error => console.log(error))
  },[])

  return (
    <section className="flex flex-col px-4 mb-6">
      <div className="order mb-5">
        <h4 className="font-bold text-lg leading-7 mb-7">Pedido</h4>
          {
            orders.map(order => (
              <div key={order.id} className="mb-6 pb-6 border-b border-black">
                <span className="block font-bold leading-6 mb-4">Resumo da Compra</span>
                <ul className="mb-4">
                  <li>Pedido: <span>{order.id}</span></li>
                  <li>Data do Pedido: <span>{new Date(order.data).toLocaleDateString()}</span></li>
                  <li>Valor total: <span>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(order.total)}</span></li>
                  <li>Entrega realizada em: <span>{new Date(order.entrega).toLocaleDateString()}</span></li>
                </ul>
                <Button 
                  small
                  center
                  full
                  handleClick={() => console.log('Detalhe do pedido')}
                >
                  Detalhe
                </Button>
              </div>
            ))
          }
      </div>
    </section>
  )
}
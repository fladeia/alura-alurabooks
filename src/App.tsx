import axios from "axios";
import { useEffect, useState } from "react";
import { BestSeller } from "./components/BestSeller";
import { BookCard } from "./components/BookCard";
import { BookFormat } from "./components/BookFormat";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LastReleases } from "./components/LastReleases";
import { Main } from "./components/Main";
import { NewsLetter } from "./components/NewsLetter";
import { Visited } from "./components/Visited";
import { ILastReleases } from "./share/Interface/ILastReleases";

export function App() {
  const token = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(token != null)
  const [lastReleases, setLastReleases] = useState<ILastReleases[]>([])
  const [bestSellers, setBestSellers] = useState<ILastReleases[]>([])

  useEffect(() => {
    axios.get('http://localhost:8000/public/lancamentos')
    .then(response => setLastReleases(response.data))

    axios.get('http://localhost:8000/public/mais-vendidos')
    .then(response => setBestSellers(response.data))
  },[])

  return (
    <div className="h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} />
      <Main />
      <LastReleases lastReleases={lastReleases}/>
      <BestSeller bestSellers={bestSellers}/>
      <Visited />
      <NewsLetter />
      <Footer />
    </div>
  )
}

 
{/* <Button
  // secondary
  // small
>
  Login
</Button>
<BookFormat 
  bookType='Impresso' 
  bookPrice='00,00' // depende do formato
  bookFormat='.pdf, .epub, .mob'
  selected={true}
  // small
/>
<BookCard 
  bookTitle='Liderança em Design'
  bookSynopsis='Habilidades de gestão para alavancar sua carreira'
  bookAuthor='Vitor Zanini'
  bookPrice='29,90' // conforme o formato escolhido
  selectedBag={false}
  selectedFavorite={false}
/> */}
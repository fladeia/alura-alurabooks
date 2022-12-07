import { useState } from "react";
import { BookCard } from "./components/BookCard";
import { BookFormat } from "./components/BookFormat";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
  const token = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(token != null)
  console.log(isLoggedIn)

  let login = false

  return (
    <div className="h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} />
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
      <Main />
      <Footer />
    </div>
  )
} 
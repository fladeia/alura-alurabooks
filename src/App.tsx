import { Router } from "./routes";

export function App() {
  return (
    <div className="h-screen flex flex-col">
      <Router />
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
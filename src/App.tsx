import { BookFormat } from "./components/BookFormat";
import { Button } from "./components/Button";

export function App() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Button
        // secondary
        // small
      >
        Login
      </Button>
      <BookFormat 
        bookType='Impresso' 
        bookPrice='00,00'
        bookFormat='.pdf, .epub, .mob'
        // small
      />
    </div>
  )
} 
import { Button } from "../Button"

export const Visited = () => {
  return (
    <section className="flex flex-col items-center gap-8 py-6 text-white bg-gradient-to-r from-blue-700 to-blue-200">
      <h2>TÓPICOS VISITADOS RECENTEMENTE</h2>
      <div className="w-[90%] flex flex-wrap gap-2 justify-center">
        <Button
          small
          handleClick={() => console.log('click')}
        >
          Android
        </Button>
        <Button
          small
          handleClick={() => console.log('click')}
        >
          Marketing Digital
        </Button>
        <Button
          small
          handleClick={() => console.log('click')}
        >
          Agile
        </Button>
        <Button
          small
          handleClick={() => console.log('click')}
        >
          Startup
        </Button>
        <Button
          small
          handleClick={() => console.log('click')}
        >
          HTML & CSS
        </Button>
        <Button
          small
          handleClick={() => console.log('click')}
        >
          Python
        </Button>
        <Button
          small
          handleClick={() => console.log('click')}
        >
          OO
        </Button>
        <Button
          small
          handleClick={() => console.log('click')}
        >
          Java
        </Button>
      </div>
    </section>
  )
}
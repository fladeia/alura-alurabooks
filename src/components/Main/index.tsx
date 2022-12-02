import { SearchInput } from "../Header/SearchInput"

export const Main = () => {
  return (
    <main className="text-center px-6 text-white bg-gradient-to-r from-blue-700 to-blue-200">
      <h1 className="font-bold text-lg leading-7 mb-3 mt-8 ">Já sabe por onde começar?</h1>
      <p className="leading-6 mb-5 px-4">Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
      <SearchInput />
    </main>
  )
}
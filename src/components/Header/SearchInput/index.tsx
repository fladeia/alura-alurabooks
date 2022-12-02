import searchIcon from '../../../assets/images/searchIcon.svg'

export const SearchInput = () => {
  return (
    <form className='max-w-md flex justify-center gap-4 mb-8 px-16 py-3 m-auto border-2 border-white rounded-full'>
      <label htmlFor="search"></label>
      <img src={searchIcon} alt="search" />
      <input 
        type="search" 
        name="search" 
        placeholder="Qual será sua próxima leitura?" 
        className='text-white bg-transparent placeholder:text-white outline-none'
      />
    </form>
  )
}
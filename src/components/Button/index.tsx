interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  small?: boolean;
  center?: boolean;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Button = ({ children, secondary, small, center, handleClick }: ButtonProps) => {
  const btnPrimary = 'text-white bg-orange-500 border-4 border-orange-500 hover:bg-brown-500 hover:border-brown-500'
  const btnSecondary = 'text-orange-500 bg-white border-4 border-orange-500 hover:text-brown-500 hover:border-brown-500'
  const btnBig = 'w-32 px-2 py-4 text-xl'
  const btnSmall = 'w-24 py-2 text-xs'

  return (
    <button
      onClick={() => handleClick(true)} // entender o funcionamento da função
      className={`font-bold ${small ? btnSmall : btnBig} ${secondary ? btnSecondary : btnPrimary} ${center && 'self-center'}`}
    >
      {children}
    </button>
  )
}
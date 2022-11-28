interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  small?: boolean;
}

export const Button = ({ children, secondary, small }: ButtonProps) => {
  const btnPrimary = 'text-white bg-orange-500 border-4 border-orange-500 hover:bg-brown-500 hover:border-brown-500'
  const btnSecondary = 'text-orange-500 bg-white border-4 border-orange-500 hover:text-brown-500 hover:border-brown-500'
  const btnBig = 'px-14 py-4 text-xl'
  const btnSmall = 'px-8 py-2 text-sm'
  
  return (
    <button className={`font-bold ${small ? btnSmall : btnBig} ${secondary ? btnSecondary : btnPrimary}`}>
      {children}
    </button>
  )
}
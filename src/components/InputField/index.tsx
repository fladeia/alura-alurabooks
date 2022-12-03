import showPassword from '../../assets/images/showPassword.svg'

interface InputFieldProps {
  inputLabel: string;
  inputType: string;
  value: string;
  placeholder?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField = ({inputLabel, inputType, value, placeholder, onChange}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label 
        htmlFor={inputLabel.toLowerCase()}
        className='font-bold text-xs px-5 mb-1'
        >
          {inputLabel}
        </label>
      <div className="flex justify-between px-5 py-2 border border-blue-700 rounded-full">
        <input 
          type={inputType}
          id={inputLabel.toLowerCase()}
          value={value}
          placeholder={placeholder}
          onChange={event => onChange(event.target.value)}
          className=' placeholder:text-gray-200 placeholder:text-xs outline-none'
        />
        {inputType === 'password' && <img src={showPassword} alt="" />}
      </div>
    </div>
  )
}
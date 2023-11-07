import { InputHTMLAttributes, ReactNode } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode
}

const TextField = (props: TextFieldProps) => {
  const { className = '', startIcon, ...rest } = props

  return (
    <div className='w-full'>
      {startIcon && <span className='absolute p-3'>{startIcon}</span>}
      <input
        className={`p-2 ${
          !!startIcon && 'pl-9'
        } rounded bg-transparent border border-gray-700 ${className}`}
        {...rest}
      />
    </div>
  )
}

export default TextField

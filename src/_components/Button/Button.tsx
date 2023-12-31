import { ButtonHTMLAttributes, ReactNode } from 'react'

import Spinner from '@/src/_components/Spinner'

const getButtonCssClasses = (type: 'default' | 'primary') => {
  switch (type) {
    case 'default':
      return 'hover:bg-white/30'
    case 'primary':
      return 'bg-pink-500 hover:bg-pink-400'
    default:
      return ''
  }
}

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  loading?: boolean
  type?: 'default' | 'primary'
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  startIcon?: ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    className = '',
    children,
    htmlType,
    startIcon,
    type = 'default',
    loading,
    ...rest
  } = props

  return (
    <button
      className={`px-5 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-400 transition ${className} ${getButtonCssClasses(
        type
      )}`}
      type={htmlType}
      {...rest}
    >
      <div className='flex gap-2 items-center'>
        {startIcon} {loading && <Spinner />} {children}
      </div>
    </button>
  )
}

export default Button

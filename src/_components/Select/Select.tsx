import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'

const Option = (props: OptionHTMLAttributes<HTMLOptionElement>) => {
  const { className = '', ...rest } = props

  return <option className={`bg-black ${className}`} {...rest} />
}

const Select = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const { className = '', ...rest } = props

  return (
    <select
      className={`w-full p-2 bg-transparent border border-gray-700 ${className}`}
      {...rest}
    />
  )
}

export default Select

Select.Option = Option

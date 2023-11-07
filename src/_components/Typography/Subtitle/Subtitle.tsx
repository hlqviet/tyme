import { HTMLAttributes } from 'react'

const Subtitle = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = '', ...rest } = props

  return (
    <h2
      className={`mb-2 uppercase font-bold text-gray-500 ${className}`}
      {...rest}
    />
  )
}

export default Subtitle

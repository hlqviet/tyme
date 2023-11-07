import { HTMLAttributes } from 'react'

const Title = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = '', ...rest } = props

  return <h2 className={`mb-2 uppercase font-bold ${className}`} {...rest} />
}

export default Title

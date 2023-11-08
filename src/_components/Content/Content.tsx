import { HTMLAttributes } from 'react'

const Content = (props: HTMLAttributes<HTMLElement>) => {
  const { className = '', ...rest } = props

  return <main className={`p-6 md:p-14 lg:p-24 ${className}`} {...rest} />
}

export default Content

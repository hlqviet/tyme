import { HTMLAttributes } from 'react'

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className = '', ...rest } = props

  return (
    <div
      className={`inline-block p-2 rounded cursor-pointer bg-pink-900 hover:bg-pink-500 transition ${className}`}
      {...rest}
    />
  )
}

export default Tag

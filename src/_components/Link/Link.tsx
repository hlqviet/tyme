import NextLink from 'next/link'
import { ComponentPropsWithRef } from 'react'

const Link = (props: ComponentPropsWithRef<typeof NextLink>) => {
  const { className = '', ...rest } = props

  return (
    <NextLink
      className={`hover:text-pink-500 transition ${className}`}
      {...rest}
    />
  )
}

export default Link

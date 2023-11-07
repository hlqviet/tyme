import { HTMLAttributes, LiHTMLAttributes } from 'react'

const Item = (props: LiHTMLAttributes<HTMLLIElement>) => {
  const { className = '', ...rest } = props

  return <li className={`pl-4 ${className}`} {...rest} />
}

const List = (props: HTMLAttributes<HTMLUListElement>) => {
  const { className = '', ...rest } = props

  return <ul className={`${className}`} {...rest} />
}

export default List

List.Item = Item

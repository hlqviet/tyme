import { Tier } from '@/src/_lib/enums'

export default interface Hero {
  id: number
  name: string
  price: number
  tier: Tier | string
  imageUrl: string
}

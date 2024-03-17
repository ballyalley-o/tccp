export enum SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type SizeMapType = 'small' | 'medium' | 'large'

export const SIZE_MAP: Record<SizeMapType, string> = {
  [SIZE.SMALL]: 'small',
  [SIZE.MEDIUM]: 'medium',
  [SIZE.LARGE]: 'large',
}

export type SizeType = {
  xs: 'xs'
  sm: 'sm'
  md: 'md'
  lg: 'lg'
  xl: 'xl'
}

import { ReactNode } from 'react'
import { ProdutType } from './products'

export interface CustomLinkType {
  children: ReactNode,
  to: string,
  classes?: string | string[],
  activeClass?: string | string[]
}

export interface ProductListType {
  products: ProdutType[],
  ulClasses?: string,
  liClasses?: string
}

export interface DataTableType {
  row: string,
  col: (string | number)[]
}

export interface DataTablePropsType {
  data: DataTableType[],
  classes?: string
}
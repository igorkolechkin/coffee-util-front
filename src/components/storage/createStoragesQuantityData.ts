import { ProdutType } from '../../types/products'
import { StorageQuantityDataType } from '../../types/storageQuantity'
import { DataTableType } from '../../types/ui'
import { formattingDate, getCollData, getSumOfData } from './helperFunctions'

export const createStoragesQuantityData = (
  storagesQuantity: StorageQuantityDataType[], 
  products: ProdutType[],
  value: string
): DataTableType[] => {
  const dates = [...new Set(storagesQuantity.map(({ date }) => date).sort())]

  const sqData = products.map(product => {
    const storagesQuantitySorted = storagesQuantity.filter(sq => sq.product_id === product.id)
    
    const collData = dates.map(date => {
      const count = storagesQuantitySorted
        .filter(count => count.date === date)
        .map(({ count, price }) => getCollData(count, price, value))
      
      return count[0] ? count[0] : ''
    })

    const tottalCollData = getSumOfData(collData)
    collData.unshift(tottalCollData)
    
    return { row: product.name, col: collData }
  })
  
  const datesLine = dates.map(formattingDate)
  datesLine.unshift('Total')

  return [{ row: 'Products', col: datesLine }, ...sqData]
}
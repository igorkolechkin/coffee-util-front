import React, { FormEventHandler, useState } from 'react'
import { ProdutType } from '../../../types/products'
import { productsStateType } from './types'
import { useGetProductsQuery } from '../../../services/products'
import { useGetStoragesQuery } from '../../../services/storages'
import { StorageType } from '../../../types/storages'
import { useAddStorageQuantityMutation } from '../../../services/storagesQuantity'
import { StorageQuantityDataAddType } from '../../../types/storageQuantity'

const getCurrentDate = () => {
  const date = new Date()
  
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

const defaultProductsState:productsStateType = Object.fromEntries(
  Array.from({ length: 13 }, (_, index) => [Number(index + 1), 0])
);

const AddProducts: React.FC = () => {
  const { data: products = [], isSuccess: isProductsSuccess } = useGetProductsQuery('0')
  const { data: storages = [] } = useGetStoragesQuery('')
  const [ addStorageQuantity ] = useAddStorageQuantityMutation()
  
  const [ productsState, setProductsState ] = useState<productsStateType>(defaultProductsState)
  const [ storageState, setStorageState ] = useState<number>(1)
  const [ dateState, setDateState ] = useState<string>(getCurrentDate())
  
  const formSubmitHandler: FormEventHandler<HTMLFormElement> =  (e) => {
    e.preventDefault()
    
    const data: StorageQuantityDataAddType[] = []
    
    for (let product in productsState) {
      if (productsState[product] === 0) continue
      
      data.push({
        storage_id: storageState,
        product_id: Number(product),
        price: products[Number(product) - 1].current_price,
        count: productsState[product],
        date: dateState
      })
    }
    
    if (!data.length) return
    
    setProductsState({ ...defaultProductsState })
    addStorageQuantity(data)
  }

  const productCountChange = (id: number, sign: boolean) => {
    const updateCount = (sign: boolean, count: number) => sign ? ++count : --count

    setProductsState(prevState => ({
      ...prevState,
      [id]: updateCount(sign, prevState[id])
    }))
  }
  
  return (
    <>
      <form onSubmit={ formSubmitHandler }>
        <div>
          <label className='block text-xl mb-4'>Storage:</label>
          <select 
            name='storages'
            className='text-lg bg-white p-1'
            defaultValue={ storageState }
            onChange={ e => setStorageState(Number(e.target.value)) }
          >
            { storages && storages.map(({ id, name }: StorageType) => (
              <option key={ id } value={ id } className='text-lg'>
                { name }
              </option>
            ))}
          </select>
        </div>
        <div className='mt-9'>
          <label className='block text-xl mb-4'>Products:</label>

          { isProductsSuccess && products.map(({ id, name }: ProdutType) => (
            <div key={ id } className='flex mb-3 last:mb-0'>
              <div className='text-lg leading-none w-28 self-center'>{ name }</div>
              <div className='mr-5 w-40 flex'>
                <button 
                  type='button' 
                  className='blue-btn'
                  onClick={ () => productCountChange(id, false) }
                >-</button>
                <input
                  className='w-full text-center'
                  readOnly
                  value={ productsState[id] }
                />
                <button 
                  type='button' 
                  className='blue-btn'
                  onClick={ () => productCountChange(id, true) }
                >+</button>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-9'>
          <input 
            type='date'
            value={ dateState }
            onChange={ e => setDateState(e.target.value) }
          />
        </div>    

        <button className='blue-btn w-28 mt-9' type='submit'>
          Send
        </button>
      </form>
    </>
  );
};

export default AddProducts;
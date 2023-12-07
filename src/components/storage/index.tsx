import React, { useState } from 'react'
import { useGetProductsQuery } from '../../services/products'
import { useGetStoragesQuantityQuery } from '../../services/storagesQuantity'
import Loading from '../Loading'
import DataTable from '../../ui/DataTable'
import { createStoragesQuantityData } from './createStoragesQuantityData'
import CalculationsBlock from './CalculationsBlock'
import { StorageInfoType } from '../../types/storages'
import CellValueNavigate from './CellValueNavigate'
import Monthes from './Monthes'
import { changeMonthNumber } from './helperFunctions'
import { useGetEarningsQuery } from '../../services/earnings'

const StorageInfo: React.FC<{ id: string, storageInfo: StorageInfoType }> = ({ id, storageInfo }) => {
  const [ cellValue, setCellValue ] = useState<string>('price')
  const [ month, setMonth ] = useState<string>(changeMonthNumber(new Date().getMonth() + 1))
  
  const { data: products = [], isSuccess: isProductsLoading } = useGetProductsQuery(id)
  const { data: storagesQuantityQuery = [], isSuccess: isStoragesQuantityQueryLoading } = useGetStoragesQuantityQuery({ id, month })
  const { data: earningsData, isSuccess: isEarningsLoading } = useGetEarningsQuery({ id, month })
  
  const storagesQuantityData = createStoragesQuantityData(storagesQuantityQuery, products, cellValue)
  const expenses = {
    ingridients: storagesQuantityData
      .filter(elem => typeof elem.col[0] === 'number')
      .reduce((total, curent) => total += Number(curent.col[0]), 0),
    storageExpenses: storageInfo
  }

  return (
    <>
      { (isProductsLoading && isStoragesQuantityQueryLoading)
          ? <div className='mt-8'>
              <div className='flex items-center mb-8'>
                <CellValueNavigate setCellValue={ setCellValue } />
                <Monthes month={ month } setMonth={ setMonth } />
              </div>
              <DataTable data={ storagesQuantityData } classes='storage-data' />
              { (cellValue === 'price' && isEarningsLoading) && 
                <CalculationsBlock 
                  { ...expenses } 
                  earnings={{ cash: earningsData?.cash, card: earningsData.card } }
                /> }
            </div>
          : <Loading />
      }
    </>
  );
};

export default StorageInfo;
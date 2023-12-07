import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'
import { useGetStoragesQuery } from '../../../services/storages';
import { StorageType } from '../../../types/storages';
import { useAddEarningsMutation } from '../../../services/earnings';
import { Earnings } from '../../../types/earnings';

const d = new Date()

const defaultReportData: Earnings = {
  storage_id: 2,
  cash: 0,
  card: 0,
  date: `${d.getFullYear()}-${d.getMonth()+1}-28`
}

const IncomeStatement: React.FC = () => {
  const inpurFileRef = useRef<HTMLInputElement>(null);

  const [ reportData, setReportData ] = useState<Earnings>(defaultReportData)
  const [ storage, setStorage ] = useState<number>(2)

  const { data: storages = [] } = useGetStoragesQuery('')
  const [ addEarnings ] = useAddEarningsMutation()

  const submitHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    if (inpurFileRef.current?.value) {
      addEarnings({ 
        ...reportData,
        storage_id: storage
      })

      if (inpurFileRef.current) {
        inpurFileRef.current.value = ''
      }
    }
  }

  const createReport = (content: string[][]) => {
    let cash = 0
    let card = 0

    content.forEach(elem => {
      if (elem[8] === 'Кешлес A') {
        card += Number(elem[10])
      } else if (elem[8] === 'Продаж за готівку') {
        cash += Number(elem[10])
      }
    })

    return { card, cash }
  }

  const formatedCSV = (content: string) => {
    const clearedContent = content.replace(/"/g, '')
    const lines = clearedContent?.split('\n')
    const data = lines.map((line: string) => line.split(',')).splice(1)

    return data
  }

  const handlerUploadFile:ChangeEventHandler<HTMLInputElement> = e => {
    const file = inpurFileRef.current?.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = e => {
      const content = formatedCSV(e.target?.result as string)
      const formatedContent = createReport(content)

      setReportData(prev => ({ ...prev, ...formatedContent }))
    }
    reader.readAsText(file)
  }


  return (
    <>
      <form onSubmit={ submitHandler }>
        <div className='mb-4'>
        <label className='block text-xl mb-3'>Upload Income Statement:</label>
          <input ref={ inpurFileRef } type='file' onChange={ handlerUploadFile } />
        </div>
        <div>
          <label className='block text-xl mb-4'>Storage:</label>
          <select 
            name='storages'
            className='text-lg bg-white p-1'
            defaultValue={ storage }
            onChange={ e => setStorage(Number(e.target.value)) }
          >
            { storages && storages.map(({ id, name }: StorageType) => (
              <option key={ id } value={ id } className='text-lg'>
                { name }
              </option>
            ))}
          </select>
        </div>
        <button type='submit' className='btn mt-8'>Upload</button>
      </form>
    </>
  );
};

export default IncomeStatement;
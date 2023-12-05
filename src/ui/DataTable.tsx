import React from 'react'
import { DataTablePropsType } from '../types/ui'

const getUniqKey = (field: string | number, index: number) => `${field}-${ new Date().valueOf() }-${index}`

const DataTable: React.FC<DataTablePropsType> = ({ data, classes }) => {
  
  return (
    <>
      <div className='max-w-full overflow-auto'>
        <table className={ classes }>
          <thead>
            <tr>
              <th>{ data[0].row }</th>
              { data[0].col.map((elem, index) => <th key={ getUniqKey(elem, index) }>{ elem }</th>) }
            </tr>
          </thead>
          <tbody>
            { data.map(({ row, col }, index) => (
              index === 0 
                ? ''
                : <tr key={ getUniqKey(row, index) }>
                  <td>{ row }</td>
                  { col.map((elem, index) => <td key={ getUniqKey(elem, index)}>{ elem }</td>) }
                </tr>
            )) }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DataTable;
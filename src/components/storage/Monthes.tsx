import React from 'react';
import { MonthesType } from '../../types/storages';
import { changeMonthNumber } from './helperFunctions';

const monthesList: string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 
  'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

const Monthes: React.FC<MonthesType> = ({ month, setMonth }) => {

  return (
    <>
      <select className='ml-8 rounded-lg px-5 py-3 outline-none bg-blue-700 text-white' 
        value={ month } 
        onChange={ e => setMonth(e.target.value) } 
      >
        { monthesList.map((month, index) => 
          <option key={`${month}-${index}`} value={ changeMonthNumber(++index) }>
            { month }
          </option>
        )}
      </select>
    </>
  );
};

export default Monthes;
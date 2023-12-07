import React from 'react'
import { CalculationsBlockType } from '../../types/storages';
import { getSumOfData } from './helperFunctions';
import { useParams } from 'react-router-dom';

const CalculationsBlock: React.FC<CalculationsBlockType> = ({ ingridients, storageExpenses, earnings }) => {
  const expenses = getSumOfData(Object.entries(storageExpenses).map(item => item[1])) + ingridients
  const cash = earnings.cash
  const card = earnings.card
  
  return (
    <>
      <div className='mt-5'>
        <div className='flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>Ingridients:</div>
          { ingridients }
        </div>
        <div className='flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>Rent:</div>
          { storageExpenses.rent }
        </div>
        <div className='flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>Communal:</div>
          { storageExpenses.communal }
        </div>
        <div className='flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>Salaries:</div>
          { storageExpenses.employee_salaries }
        </div>
        <div className='flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>Prostopay:</div>
          { storageExpenses.prosto_pay }
        </div>
        <div className='flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>SIM-card:</div>
          { storageExpenses.sim_card }
        </div>
        <div className='text-lg font-bold flex items-center mt-3'>
          <div className='w-28 py-1 px-3 mr-3'>Expenses:</div>
          { expenses }
        </div>
        <div className='text-lg font-bold flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>Cash:</div>
          { cash }
        </div>
        <div className='text-lg font-bold flex items-center'>
          <div className='w-28 py-1 px-3 mr-3'>Card:</div>
          { card }
        </div>
        <div className='text-lg font-bold flex items-center mt-3'>
          <div className='w-28 py-1 px-3 mr-3'>TOTAL:</div>
          { (cash + card) - expenses }
        </div>
      </div>
    </>
  );
};

export default CalculationsBlock;
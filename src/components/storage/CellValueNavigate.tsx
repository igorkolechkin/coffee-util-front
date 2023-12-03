import React from 'react';

interface CellValueNavigateType {
  setCellValue: React.Dispatch<React.SetStateAction<string>>
}

const CellValueNavigate: React.FC<CellValueNavigateType> = ({ setCellValue }) => {
  return (
    <>
      <div className='flex'>
        <button type='button' className='btn mr-5' onClick={() => setCellValue('price')}>
          Price
        </button>
        <button type='button'className='btn' onClick={() => setCellValue('count')}>
          Count
        </button>
      </div>
    </>
  );
};

export default CellValueNavigate;
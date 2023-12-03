import React from 'react'
import { StorageType } from '../../../types/storages';

interface stType {
  storages: StorageType[],
  storageState: number,
  setStorageState: (id: number) => {}
}

const StoragesSelect: React.FC<stType> = ({ storages, storageState, setStorageState}) => {
  return (
    <>
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
    </>
  );
};

export default StoragesSelect;
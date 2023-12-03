import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetStorageQuery } from '../services/storages'
import StorageInfo from '../components/storage';

const Storage: React.FC = () => {
  const { id = '1' } = useParams()
  const { data: storage, isSuccess } = useGetStorageQuery(id)
  
  return (
    <>
      { isSuccess && 
        <>
          <h2>{ storage.name }</h2>
          <StorageInfo id={ id } storageInfo={ storage } />
        </>
      }
    </>
  );
};

export default Storage;
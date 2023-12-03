import React from 'react'
import StoragesList from '../components/storages/StoragesList'


const Storages: React.FC = (props) => {
  return (
    <>
      <h2 className='font-si'>Storages:</h2>
      <StoragesList />
    </>
  );
};

export default Storages;
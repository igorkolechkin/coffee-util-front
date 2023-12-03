import React from 'react'
import { useGetStoragesQuery } from '../../services/storages';
import { StorageType } from '../../types/storages';
import CustomLink from '../../ui/CustomLink';

const StoragesList: React.FC = () => {
  const { data: storages = [] } = useGetStoragesQuery('')
  
  return (
    <>
      { storages &&
        <ul className='mt-8 flex justify-between'>
          { storages.map(({name, id}: StorageType) => (
            <li className='storage-item' key={ id }> 
              <CustomLink to={ `storage/${id}` } classes='storage-link'>
                { name }
              </CustomLink>
            </li>
          )) }
      </ul> }
    </>
  );
};

export default StoragesList;
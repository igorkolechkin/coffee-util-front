import React from 'react'
import { ProductListType } from '../types/ui';

const ProductsList: React.FC<ProductListType> = ({ products, ulClasses, liClasses }) => {
  return (
    <ul className={ ulClasses }>
      { products.map(({ id, name }) =>
        <li key={ id } className={ liClasses }>
          { name }
        </li>
      )}
    </ul>
  );
};

export default ProductsList;
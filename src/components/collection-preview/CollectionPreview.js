import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.styles.scss';

export const CollectionPreview = ({ title, items }) => {
  return (
    <>
      <div className='collection-preview'>
        <Link className='title' to={`/shop/${title}`.toLowerCase()}>
          {title.toUpperCase()}
        </Link>
        <div className='preview'>
          {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
};

// export default CollectionPreview;

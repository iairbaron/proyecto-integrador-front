import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import QuiltedImageList from '../components/components/ImageList'
import BasicModal from '../components/commmons/Modal';
import SlideImage from '../components/commmons/sildeImage';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
]

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state.product;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
        <div className="flex justify-center items-center p-10"> 
          <QuiltedImageList itemData={itemData} />
      </div>
      <div className='flex justify-center items-center lg:pl-40 lg:ml-80 '>
      <BasicModal>
          <SlideImage itemData={itemData} />
      </BasicModal>
      </div>
    
    <div className="product-detail">
      
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>

    </>
  );
};

export default ProductDetail;

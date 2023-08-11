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
      <h2 className="product-name flex w-700 justify-center items-center pb-5 pt-10">{product.name}</h2>
        <div className="flex w-full justify-center items-center pb-5 pt-10"> 
          <QuiltedImageList itemData={itemData} />
      </div>
      <div style={{ display: "flex",   justifyContent:"center"}}> 
        <div style={{width:700, display:"flex", justifyContent:"space-between"}}>
          <div className='flex-col w-3/4'>
            <h1 className="text-2xl font-bold">{product.name} </h1>
            <p className="product-price  mb-3 ">${product.price}</p>
            <h1 className="text-2x1 font-bold mb-1">Descripcion:</h1>
            <p className="product-description "> {product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem suscipit rem voluptatibus ducimus nostrum alias repudiandae. Consectetur asperiores doloremque eum amet provident, dicta nobis deserunt, voluptatum officiis nisi omnis.lorem</p> 
      </div>
      <BasicModal >
          <SlideImage itemData={itemData} />
      </BasicModal>
      </div>
      </div>      
      <div className="product-info flex flex-col ">
      </div>
    </>
  );
};

export default ProductDetail;

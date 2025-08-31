import React from 'react'
import { useParams } from 'react-router'
import { UseStoreHook } from '../Hooks/UseStoreHook';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = UseStoreHook();
  console.log("in detail-->", products);

  const detailProduct = products.find((item) => item.id === Number(id));
  console.log("detail product-->", detailProduct);

  const contextData = UseStoreHook();


  return (
    <div className='h-screen flex justify-center items-center pt-10 gap-5 flex-wrap'>
      <div className="h-[400px] w-[350px]">
        <img className="h-full  object-cover" src={detailProduct.image} alt="" />
      </div>
      <div className='detailsnow w-[30vw] flex flex-col '>
        <h1 className='font-bold text-[3rem]'>{detailProduct.productname} </h1>
        <p className='font-thin text-[2rem] text-[#CC0C39]'>{detailProduct.description} </p>
        <p className='font-semibold text-[1.5rem]'><span >Color -</span>{detailProduct.color} </p>
        <p className='font-semibold text-[1.5rem]'><span >Brand -</span>{detailProduct.brand} </p>

        <div className='flex gap-[10px]'>
          <h2 className='text-[#CC0C39] text-[2rem] font-bold'>-{detailProduct.discount}%  </h2>
          <h2 className='font-bold text-[2rem]'>  ₹{detailProduct.price} </h2>
        </div>
        <h2>MRP - ₹<span className='line-through'>{detailProduct.MRP}</span> </h2>
      </div>

    </div>
  )
}

export default ProductDetails

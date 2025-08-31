import React from 'react'
import AdProductForm from '../components/AdProductForm'
import { IoMdArrowRoundBack } from "react-icons/io";


const AddProduct = () => {
  return (
    <div className=''>
      <button className='flex items-center absolute top-[7%] left-[1%] font-bold cursor-pointer' onClick={() => nevigate(-1)}><IoMdArrowRoundBack /><span>Back</span></button>
      <AdProductForm />
    </div>
  )
}

export default AddProduct

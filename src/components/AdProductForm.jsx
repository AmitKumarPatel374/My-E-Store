import { useNavigate } from "react-router";
import UseFormHook from "../Hooks/UseFormHook"
import { UseStoreHook } from "../Hooks/UseStoreHook"
import { toast } from "react-toastify";

const AdProductForm = () => {
  const { addProducts } = UseStoreHook();
  const nevigate = useNavigate();

  const {values,resetForm,handleChange}=UseFormHook({
    image:"",
    productname:"",
    description:"",
    color:"",
    price:0,
    MRP:0,
    discount:0,
    brand:""
  })

  const submitFormHandler =(e)=>{
     e.preventDefault();
     addProducts(values);
     toast.success("New Product Added Succesfully!");
     nevigate('/');
     resetForm();
  }

  
  return (
    <div className="flex h-screen items-center   justify-center bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">

      <form action="" onSubmit={submitFormHandler}  className="border-[2px] w-1/2 flex flex-col gap-[1rem] p-8 rounded-md mt-5" >
           <h1 className='text-center text-3xl font-bold'>📝 New Product Form</h1>
           <div className='flex flex-col relative'>
              <label className="absolute z-0 top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="image">Image URL</label>
             <input className='border p-2 rounded ' type="url"   name='image' id='image' onChange={handleChange} value={values.image} />
           </div>
           <div className='flex flex-col relative'>
              <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="productname">Product Name</label>
             <input className='border p-2 rounded ' type="text"   name='productname' id='productname' onChange={handleChange} value={values.productname}  />
           </div>
           <div className='flex flex-col relative'>
              <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="description">Description</label>
             <input className='border p-2 rounded ' type="text"   name='description' id='description' onChange={handleChange} value={values.description}   />
           </div>
           <div className='flex flex-col relative'>
              <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="color">Color</label>
             <input className='border p-2 rounded ' type="text"   name='color' id='color' onChange={handleChange} value={values.className}  />
           </div>
           <div className='flex flex-col relative'>
              <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="price">Price</label>
             <input className='border p-2 rounded ' type="text"   name='price' id='price' onChange={handleChange} value={values.price}   />
           </div>
           <div className='flex flex-col relative'>
              <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="MRP">MRP</label>
             <input className='border p-2 rounded ' type="text"   name='MRP' id='MRP' onChange={handleChange} value={values.MRP}   />
           </div>
           <div className='flex flex-col relative'>
              <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="discount">Discount(%)</label>
             <input className='border p-2 rounded ' type="text"   name='discount' id='discount' onChange={handleChange} value={values.discount}   />
           </div>
           <div className='flex flex-col relative'>
              <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="discount">Brand</label>
             <input className='border p-2 rounded ' type="text"   name='brand' id='brand' onChange={handleChange} value={values.brand}   />
           </div>
           <button className='bg-[#00809D] p-2 rounded cursor-pointer'>
             Add Product
           </button>
      </form>
    </div>
  )
}

export default AdProductForm


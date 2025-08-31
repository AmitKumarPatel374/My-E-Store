import { UseStoreHook } from "../Hooks/UseStoreHook";
import CardComponent from "../components/CardComponent";
import { useNavigate } from "react-router";
import '../index.css';
import { toast } from "react-toastify";
import { IoFilter } from "react-icons/io5";
import { useMemo, useState } from "react";

const Home = () => {
  const { products, setProducts } = UseStoreHook();
  const nevigate = useNavigate();
  console.log("products in home-->", products);

  const [filteredvalue, setFilteredvalue] = useState("all");


  const filteredProduct = useMemo(()=>{
     console.log("executing.....");
     if (filteredvalue === "all")  return products;
      else return products.filter(
      (val)=> val.brand.toLowerCase() === filteredvalue.toLowerCase()
     );
     
  },[filteredvalue,products]);

  const handleDelete =(id)=>{
     let filteredProduct = products.filter((val)=>val.id != id);
     setProducts(filteredProduct);
     toast.success("Product Deleted Successfully!");
     setFilteredvalue("all");
  }

  return (

    <div className="padding_add p-5 pt-15">

      <div className="relative">
        <p className=" flex  items-center gap-2 text-black font-thin absolute top-3 left-55">filter<IoFilter /></p>
        <select
          className="p-3 ml-16 bg-gray-200 text-black border rounded-xl w-[15rem]"
          onChange={(e) => setFilteredvalue(e.target.value)}
          name="brand"
          value={filteredvalue}
        >
          <option value="all">All</option>
          <option value="portronics">Portronics</option>
          <option value="redmi">Redmi</option>
          <option value="motorola">Motorola</option>
          <option value="apple">Apple</option>
        </select>
      </div>

      <div className=" p-5 flex  flex-wrap gap-15 justify-center  " >
      {filteredProduct.map((val) => (
        <div key={val.id} className="flex flex-col">
          <div key={val.id} onClick={() => nevigate(`/detail/${val.id}`)}>
            <CardComponent
              image={val.image}
              productname={val.productname}
              price={val.price}
            />
          </div>
          <button
          className="bg-[#e74c3c] rounded-b-xl border-b border-r border-l font-bold p-1 cursor-pointer  hover:bg-[#b22222] transition"
          onClick={()=>handleDelete(val.id)}
          >
           Delete Product
          </button>
        </div>
      ))}
    </div>
    </div>
    

  )
}

export default Home

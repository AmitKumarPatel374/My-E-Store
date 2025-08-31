import React, { createContext, useEffect, useState } from 'react';
export const MyProductContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState(
    () => JSON.parse(localStorage.getItem("pro")) || [] 
  )

  const [users, setusers] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });


  const addProducts = (data) => {
    let productObj = {
      ...data,
      id: Date.now(),
    };
    console.log("productObj---->", productObj);

    setProducts([...products, productObj]);
  }

  useEffect(() => {
    localStorage.setItem("pro", JSON.stringify(products));
  })

  return (
    <MyProductContext.Provider value={{ products, setProducts, addProducts, users, setusers, currentUser, setCurrentUser }} >
      {children}
    </MyProductContext.Provider >
  )
}

export default ProductContext

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import ProductDetailsPage from "./ProductDetails/ProductDetailsPage";
import { useEffect, useState } from "react";

export default function Shopping(){

    const[data,setData] = useState();
    
    const fetchData = async () => {
       
        const res = await fetch("https://fakestoreapi.com/products");
        const dt = await res.json();
        setData(dt);
       
        
    }

    useEffect(() =>{
        // const res = fetchData();
        fetchData();

    },[]);

    useEffect(() =>{
        console.log(data);
    },[data])
    
   


    return (
      
          <>
          <h1>Shopping</h1>
          </>
           
    )
}
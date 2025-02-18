import logo from './logo.svg';
import CurdPage from './pages/curd/curd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopping from './ShoppingTask/pages/Shopping';
import Home from './ShoppingTask/pages/home/Home';
import NavBar from './ShoppingTask/components/NavBar/NavBar';
import ProductDetailsPage from './ShoppingTask/pages/ProductDetails/ProductDetailsPage';
import CartPage from './ShoppingTask/pages/CartPage/CartPage';
// import { DataContext } from './ShoppingTask/Context';
import { createContext, useEffect, useMemo, useState } from 'react';

import {  useDispatch } from "react-redux";
import store from './redux/store';
import { fetchProducts, storeProduct } from './redux/actions/productAction';


export  const DataContext = createContext();

function App() {

  const [data, setData] = useState();
  
  const [selectedId, setSelectId] = useState();

  const dispatch = useDispatch();

  useEffect(() =>{
      // fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data) =>{
        
      //     const newRecord = data.map((item) => ({
      //       ...item,isAdded : false,
      //     }))

      //     dispatch(storeProduct(newRecord));
      //     // setData(newRecord);
      // })
      dispatch(fetchProducts());
  },[]);




  // const providerData = {data,setData,selectedId,setSelectId};

 
  return (
    <>
    
    <BrowserRouter>
    {/* <DataContext.Provider value={providerData}> */}
    
      <NavBar/>
      <Routes>
        
        <Route path='shopping' element={<Shopping/>}/>
        <Route path='shopping/home' element={<Home />}/>
        <Route path='shopping/cart' element={<CartPage />} />
        <Route path='shopping/details' element={<ProductDetailsPage />} />
       
      </Routes>
      
      {/* </DataContext.Provider> */}
      
    </BrowserRouter>
    
    </>
    
    // <CurdPage  />
  )
  
}

export default App;

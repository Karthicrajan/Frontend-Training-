import logo from './logo.svg';
import CurdPage from './pages/curd/curd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopping from './ShoppingTask/pages/Shopping';
import Home from './ShoppingTask/pages/home/Home';
import NavBar from './ShoppingTask/components/NavBar/NavBar';
import ProductDetailsPage from './ShoppingTask/pages/ProductDetails/ProductDetailsPage';
import CartPage from './ShoppingTask/pages/CartPage/CartPage';
import { DataContext } from './ShoppingTask/Context';
import { useEffect, useMemo, useState } from 'react';

function App() {

  const [data, setData] = useState();
  const [selectedId, setSelectId] = useState();

  // const [cardList,setCardList] = useState();

  useEffect(() =>{
      fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data) =>{
        
          const newRecord = data.map((item) => ({
            ...item,isAdded : false,
          }))
          setData(newRecord);
      })
  },[]);

  // useEffect(() =>{
  //     console.log(data);
  // },[data]);


  const providerData = useMemo(() => {

    return {data,setData,selectedId,setSelectId};

  }, [data,selectedId]);

  // console.log({...props});
  return (
    <>
    
    <BrowserRouter>
    <DataContext.Provider value={providerData}>
      <NavBar/>
      <Routes>
        
        <Route path='shopping' element={<Shopping/>}/>
        <Route path='shopping/home' element={<Home />}/>
        <Route path='shopping/cart' element={<CartPage />} />
        <Route path='shopping/details' element={<ProductDetailsPage />} />
       
      </Routes>
      </DataContext.Provider>
    </BrowserRouter>
    
    </>
    
    // <CurdPage  />
  )
  
}

export default App;

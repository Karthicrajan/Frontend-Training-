import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register/register';
import Home from './pages/Home/home';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/productDetails';
function App() {
  return (
      <>
        <BrowserRouter>
    
        <NavBar/>
          <Routes>
           
            <Route path='/' element={<Home/>}/>
            <Route path='/productList' element={<ProductList/>} />
            <Route path='/productDetails' element={<ProductDetails />} />
            {/* <Route path='/register' element={<Register/>}/> */}
           
          </Routes>
        <Footer />
         </BrowserRouter>
      </>
  );
}

export default App;

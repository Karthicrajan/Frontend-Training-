import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './slider.css'
export default function Slider({listProduct}){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [products,setProductList] =  useState(listProduct);
    const thatId =  useSelector((state) => state.products.selectId);

    const[viewProducts,setVeiwproducts] = useState();

    useEffect(() =>{
        setVeiwproducts(products?.slice(0,4));
    },[products]);

    function onMoveRight(){
        const tempProduct = products;
        const firstProduct = tempProduct.shift();
        tempProduct.push(firstProduct);
        setProductList(tempProduct.map((item) => item));
       

    }
    function onMoveLeft(){
        const tempProduct = products;
        const lastProduct = tempProduct.pop();
        tempProduct.unshift(lastProduct);
        setProductList(tempProduct.map((item) => item));
        
    }
    

    function handleSelect(id){

        const temp = products[id];
        console.log(temp);
        dispatch({type : "SET_SELECT",payload : id});
        navigate('/productDetails');
    }

    
   
    return (
        <>
         <div className="product-slider d-flex justify-content-between align-items-center" >
                        <span className="cursor" onClick={onMoveLeft}><i class="fa-solid fa-chevron-left"></i></span>
                        <div className="scroll-productList"  >
                            {viewProducts?.map((item,key) =>{
                            return <ProductCard productData={item} id={key} click={handleSelect} bodyStyle={"card-body"}/>
                            })}
                        </div>
                        <span className="cursor"  onClick={onMoveRight}><i class="fa-solid fa-chevron-right"></i></span>
         
        </div>
        </>
    )
}
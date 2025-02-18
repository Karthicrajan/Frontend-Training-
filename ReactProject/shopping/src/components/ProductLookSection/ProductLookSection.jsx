import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './ProductLookSection.css';
import ProductCard from "../ProductCard/ProductCard";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../slider/slider";
export default function ProductLookSection(){


    const navigate = useNavigate();
    


   
    const products =  useSelector((state) => state.products.listProducts);
    


    function handleClick(){
        console.log("Hello");
        navigate('/productList');
    }


    function handleScroll(){
        console.log("Card scrolled");
    }


    return (
        <>
        <div className="order-process-section">
       
            <Card title={"Best Sellers"} footerConf={{btnLabel : "View All", clickFun : handleClick}}>
            {/* <div className="product-slider d-flex justify-content-between align-items-center" onScroll={handleScroll}>
                <span className="cursor" onClick={onMoveLeft}><i class="fa-solid fa-chevron-left"></i></span>
                <div className="scroll-productList" >
                    {viewProducts?.map((item,key) =>{
                    return <ProductCard productData={item} id={key} click={handleSelect}/>
                    })}
                </div>
                <span className="cursor"  onClick={onMoveRight}><i class="fa-solid fa-chevron-right"></i></span>
 
            </div> */}

            <Slider listProduct={products} />
               
                     
            </Card>

           
            
            
        </div>
        </>
    )
}
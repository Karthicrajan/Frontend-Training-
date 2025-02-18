import { useEffect, useState } from "react";
import Card from "../Card/Card";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../slider/slider";
export default function SalesSection(){

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products =  useSelector((state) => state.products.listProducts);
  
    function handleClick(){
        console.log("Hello");
        navigate('/productList');
    }
    
       return (
           <>
           <div className="order-process-section">
          
               <Card title={"On Sale"} footerConf={{btnLabel : "View All", clickFun : handleClick}}>
                    
                    <Slider listProduct={products}/>
                  
                        
               </Card>
   
              
               
               
           </div>
           </>
       )
}
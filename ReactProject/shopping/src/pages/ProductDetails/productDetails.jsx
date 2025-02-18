import { useSelector } from "react-redux";
import Button from "../../components/button/button";
import { useEffect, useState } from "react";
import './productDetails.css'
export default function ProductDetails(){

    const products =  useSelector((state) => state.products.listProducts);
    const selectedId =  useSelector((state) => state.products.selectId);
    const [product,setProduct] = useState();

    useEffect(() =>{
        setProduct(products[selectedId]);
    },[selectedId])
    return (
        <div className="page">
            <div className="w-50">
                <div class="row">
                    <div class="col-6">
                        <div className="image-container">
                            <img src={product?.product_img}/>
                        </div>
                    </div>
                    <div class="col-6">
                        <h3>{product?.product_name}</h3>
                        {/* <p></p> */}
                        <div className="dt-price-section">
                             {product?.offer_price ? <><span className="offer-price">{product?.price}</span> <span>{product?.offer_price}</span></> : <span>{product?.price}</span>}
                        </div>
                        
                        <div>
                            <Button label={"Add to cart"} style={"shopbtn"}/>
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}
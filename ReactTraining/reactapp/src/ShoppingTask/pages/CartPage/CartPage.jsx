import { useContext } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { DataContext } from "../../../App";
// import { DataContext } from "../../Context";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage(){
    // const {data,setData} = useContext(DataContext);
    const data = useSelector((state) => state.products?.allProducts);
    return (
        <>
        
        <div className="container">
            <h5>Your Cart</h5>
            {data?.map((item) =>{
                return item.isAdded ? <CartCard data={item} /> : null 
            })} 
            
        </div>
        

        </>
    )
}
import { useContext } from "react";
import CartCard from "../../components/CartCard/CartCard";
import { DataContext } from "../../Context";

export default function CartPage(){
    const {data} = useContext(DataContext);
    return (
        <>
        
        <div className="container">
            <h5>Your Cart</h5>
            {data?.map((item) =>{
                return item.isAdded ? <CartCard data={item}/> : null 
            })} 
            
        </div>
        

        </>
    )
}
import { useState } from "react";
import Orderprocess from "../../components/orderprocess/orderprocess";
import Card from "../Card/Card";
import './orderProcessSection.css';
export default function OrderProcessSection(){
     const[process,setProcess] = useState([{processTitle : "Curb-side pickup",processIcon : "fa-solid fa-truck"},
            {processTitle : "Free shipping on orders over $50",processIcon : "fa-solid fa-truck-fast"}
            ,{processTitle : "Low prices guaranteed",processIcon : "fa-solid fa-truck"},
            {processTitle : "Available to you 24/7",processIcon : "fa-solid fa-business-time"}]);
    return(
        <>
         <div className="order-process-section">

                <Card>
                    <div class="row">
                        {process.map((item) =>{
                            return <Orderprocess processTitle={item.processTitle} processIcon={item.processIcon} />
                        })}
                    </div>
                </Card>
                
            </div>
        </>
    )
}
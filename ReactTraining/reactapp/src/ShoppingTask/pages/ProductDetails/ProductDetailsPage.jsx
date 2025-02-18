import { useContext } from "react";
import Button from "../../components/Button/Button";
import "./style.css";
import {ToastContainer, toast } from 'react-toastify';
import { DataContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../../redux/actions/productAction";
// import { DataContext } from "../../Context";
export default function ProductDetailsPage(){

    // const {data,selectedId,setData} = useContext(DataContext);

    // const currentRecord = data.find((item) => item.id == selectedId);

    // console.log(selectedId,currentRecord);
    const dispatch = useDispatch();


    const data = useSelector((state) => state.products.allProducts);
    const selectedId = useSelector((state) => state.products.selectId);
    console.log(data);

     const currentRecord = data.find((item) => item.id == selectedId);


   
    const addToCart = (e) =>{
        // setData((preData) => 
        //     preData.map((item) => item.id == currentRecord.id ? {...item,isAdded : true} : item)
        // );
        dispatch(addtoCart(currentRecord.id));
        
        toast.success("Product Added to Cart");
        console.log("test",e);
    }
    
     console.log(currentRecord);
    return(
        <>
        {/* <h1>Product details</h1> */}
        <div className="container" Style={"margin-top: 50px;"}>
        <div className="row">
            <div className="col-4">
                <img className="dt-img" id="dtimage" src={currentRecord.image}/>
            </div>
            <div className="col-8" id="details-con">
                 <h3 id="pd-title">{currentRecord.title}</h3>
                <p Style={"font-size: x-large;"}><b>Price: {currentRecord.price}</b></p>
                <p><b>Description :</b>{currentRecord.description}</p>
                <p><b>Category : </b>{currentRecord.category}</p>
                <div >
                   
                    <Button label={"buy"} btnStyle={"btn btn-warning buy-btn"} btnFor={"buy"} id={currentRecord.id} />
                    <Button label={"Add to Cart"} btnStyle={"btn btn-warning"} btnFor={"addCart"} id={currentRecord.id} clickFun={addToCart} isAdded={currentRecord.isAdded}/>
                </div> 
            </div>
          </div>
          <ToastContainer />
    </div>
        </>
    )
}
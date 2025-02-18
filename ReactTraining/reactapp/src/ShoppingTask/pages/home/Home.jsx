import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
// import { DataContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { setSelectProduct } from "../../../redux/actions/productAction";

export default function Home(){

    const navigate = useNavigate();

    // const {data,setSelectId} = useContext(DataContext);

    const dispatch = useDispatch();

    const data = useSelector((state) => state.products?.allProducts);


    useEffect(() => {
        console.log("this data from HOme", data);
    },[data]);
    

    const buyHandler = (id) => {
        // setSelectId(id);
        dispatch(setSelectProduct(id));
        navigate("/shopping/details");
    }
    return (
        <>
        <div className="container">
            <div className="card-list" >
                <div className="row row-cols-4" id="list">
                    {data?.map((item) =>{
                       return <Card data={item} click={buyHandler}/>
                    })}
    
                </div>
            </div>
        </div>
        
        </>
    )
}
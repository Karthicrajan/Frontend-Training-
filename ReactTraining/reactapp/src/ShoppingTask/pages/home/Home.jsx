import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import { DataContext } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();

    const {data,setSelectId} = useContext(DataContext);
    useEffect(() => {
        console.log("this data from HOme", data);
    },[data]);
    

    const buyHandler = (id) => {
        setSelectId(id);
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
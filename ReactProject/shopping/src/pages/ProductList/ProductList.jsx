import { Link } from 'react-router-dom';
import './ProductList.css'
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function ProductList(){
     

    const [productList,setProductList] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products =  useSelector((state) => state.products.listProducts);
    const thatId =  useSelector((state) => state.products.selectId);

    console.log(products);
    useEffect(() =>{
        setProductList(products);
        
    },[products])

    
  
    function handleSelect(id){

        const temp = products[id];
        console.log(temp);
        dispatch({type : "SET_SELECT",payload : id});
       
        navigate('/productDetails');
    }

    

    useEffect(() =>{
        console.log(thatId);
    },[thatId])

    return(
        <>
        <div className="page">
            <div class="row">
                <div class="col-2">
                    <div className='sideBar'>
                        
                                <p className='fs-4'>Browse by</p>
                        
                       
                        <hr></hr>
                        <ul className='footer-list list-group'>
                            
                            <Link className="navsub-menu-link" to="/shopAll">Shop All</Link>
                            <Link className="navsub-menu-link" to="/shopAll">Computers</Link>
                            <Link className="navsub-menu-link" to="/shopAll">Tablets</Link>
                            <Link className="navsub-menu-link" to="/shopAll">Shop All</Link>
                            <Link className="navsub-menu-link" to="/shopAll">Drone & Cameras</Link>
                            <Link className="navsub-menu-link" to="/shopAll">Audio</Link>
                            <Link className="navsub-menu-link" to="/shopAll">Mobile</Link>
                            <Link className="navsub-menu-link" to="/shopAll">T.V & Home Cinema</Link>
                        </ul>
                    </div>
                   
                </div>
                <div class="col-10">
                    <div className='page-header'>
                        <h1>Best Sellers</h1>
                    </div>

                    <div className='listHeader d-flex justify-content-between'>
                        <p>{productList?.length} Products</p>
                        <div className='sort'>
                            <p>Sort by: Recommended</p>
                        </div>

                    </div>
                    <div class="row row-cols-4 row-gap-3">
                        
                        {productList?.map((item,key) =>{

                        return <div class="col"> <ProductCard productData={item} id={key} click={handleSelect} bodyStyle={"card-body trans"}/></div>
                        })}
                        
                       
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
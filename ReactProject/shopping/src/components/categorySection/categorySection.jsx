import { useState } from "react";
import Card from "../Card/Card";
import CategoryCard from "../categoryCard/categoryCard";
import './categorySection.css';
import Button from "../button/button";
export default function CategorySection(){
    const [category,setCategory] = useState([{cat_imag : "https://static.wixstatic.com/media/c837a6_82b44061aa3e4ad6958d2a1ac317199c~mv2.jpg/v1/fill/w_216,h_215,q_90/c837a6_82b44061aa3e4ad6958d2a1ac317199c~mv2.webp",category : "Computer"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_9c30b13d43264ebf888ab1e70eaf2daa~mv2.jpg/v1/fill/w_216,h_215,q_90/c837a6_9c30b13d43264ebf888ab1e70eaf2daa~mv2.webp",category : "Mobile"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_216,h_215,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.webp",category : "Drones & Cameras"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_3fae8a0f61fc49c0afe7217c479c8e16~mv2.png/v1/fill/w_216,h_215,q_90/c837a6_3fae8a0f61fc49c0afe7217c479c8e16~mv2.webp",category : "Sale"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_6d6b2a5842f449539f528c501e5cc035~mv2.jpg/v1/fill/w_215,h_215,q_90/c837a6_6d6b2a5842f449539f528c501e5cc035~mv2.webp",category : "Tablets"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_fba39b02bd5c4f43ae6d4e1db77204c5~mv2.png/v1/fill/w_216,h_215,q_90/c837a6_fba39b02bd5c4f43ae6d4e1db77204c5~mv2.webp",category : "Best Sellers"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_71e3b067871a4b6a88c3b93a55ba2b00~mv2.jpg/v1/fill/w_216,h_215,q_90/c837a6_71e3b067871a4b6a88c3b93a55ba2b00~mv2.webp",category : "Wearable Tech"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_216,h_215,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.webp",category : "Drones & Cameras"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_216,h_215,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.webp",category : "Drones & Cameras"},
        {cat_imag : "https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_216,h_215,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.webp",category : "Drones & Cameras"},

    ]);

    return (
        <>
        <div className="order-process-section">

            <Card title={"Shop by Category"}>
                <div className="cat-card-list">
                    <div class="row row-cols-5">
                        {category.map((item) => 
                             <CategoryCard data={item}/>
                        )}
                       

                    </div>
                </div>  
            </Card>
            
            <div className="car-banner">
                <div className="position-relative">
                    <img className="position-absolute w-100" src="https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1799,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png"/>
                    
                    <div className='car-banner-body position-relative float-end'>
                  
                        <div className='car-banner-tag'>
                            <h2>Save up to</h2>
                        </div>
                        <h2><span className="cat-price">$150</span><br/> on Selected laptop & tablets brands </h2>
                        <p className='car-banner-sub'>Terms and conditions apply</p>
                        <div className='car-btn-container w-50'>
                            {/* <button type="button" class="shopbtn ">Shop Now</button> */}
                            <Button label={"Shop Now"} style={"shopbtn"}/>
                        </div>
                        
                    </div>
                </div>
                    
                </div>
        </div>
        </>
    )
}
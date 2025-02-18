import Button from "../button/button";
import Card from "../Card/Card";

export default function OfferBanner2(){
    return(
        <>
         <div className="order-process-section">
            
                <div className="car-banner">
                    <div className="position-relative">
                        <img className="position-absolute w-100" src="https://static.wixstatic.com/media/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png/v1/fill/w_1799,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png"/>
                        
                        <div className='car-banner-body position-relative float-start'>
                        <div className='banner-tag'>
                            <p>Today's Special</p>
                        </div>
                            <div className='car-banner-tag'>
                                <h2>Best Arial View in Town</h2>
                            </div>
                            <h2><span className="cat-price"><span>30%</span> off</span><br/> on professional camera drones</h2>
                            <p className='car-banner-sub'>Limited quantities.<br/>
                            See product detail pages for availability.</p>
                            <div className='car-btn-container w-50'>
                                
                                <Button label={"Shop Now"} style={"shopbtn"}/>
                            </div>
                            
                        </div>
                    </div>
                        
                    </div>
            
         </div>
        </>
    )
}
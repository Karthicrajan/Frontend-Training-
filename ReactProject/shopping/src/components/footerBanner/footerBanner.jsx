import Button from "../button/button";
import './footerBanner.css';
export default function FooterBanner(){
    return (
        <>
        <div className="footer-banner">
            <div className="position-relative">

                <img className="footer-banner-image" src="https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1045,h_556,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg"></img>
                <div className='footer-banner-body position-relative float-start'>
                        
                            <h2> Need Help? Check Out Our Help Center</h2>
                            <p className='car-banner-sub'>'m a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            <div className='car-btn-container w-50'>
                                
                                <Button label={"Shop Now"} style={"wightBtn"}/>
                            </div>
                            
                        </div>
            </div>
            
        </div>
        </>
    )
}
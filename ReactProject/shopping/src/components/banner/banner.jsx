import './banner.css';
import bg from '../../assets/banner-img.avif'
import Button from '../button/button';
export default function Banner(){
    return (
        <>
        <div>
            <div className="banner-container">
                <img  className='banner-img' src={bg}/>
                <div className='banner-body'>
                    <div className='banner-tag'>
                        <p>Best Prices</p>
                    </div>
                    <h1>Incredible Prices on All Your Favorite Items</h1>
                    <p className='banner-sub'>Get more for less on selected brands</p>
                    <div className='btn-container'>
                        {/* <button type="button" class="shopbtn ">Shop Now</button> */}
                        <Button label={"Shop Now"} style={"shopbtn"}/>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}
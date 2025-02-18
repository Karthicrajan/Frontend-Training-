import Button from '../button/button';
import './newsLetter.css';
export default function NewsLetter(){
    return(
        <>
            <div className="order-process-section">
                <div className="card-news">
                <div className='card-header'>
                <h3>Newsletter</h3>
                <p>Sign up to receive updates on new arrivals and special offers</p>

                <form>
                    <div className='d-flex w-50 gap-2 center form-container'>
                    <input type="text" className="form-control nav-search-input email-input" placeholder="Enter Email"  aria-describedby="button-addon2"/>
                    <div className='w-25'>
                         <Button label={"Subscribe"} style={"bannerBtn"} />
                    </div>
                    </div>
                    
                </form>
            </div>
                </div>
            </div>
        </>
    )
}
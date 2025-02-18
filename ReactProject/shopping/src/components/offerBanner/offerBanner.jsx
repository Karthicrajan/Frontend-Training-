import './offerBanner.css';
import offerImg1 from '../../assets/offer-card1.avif';
import Button from '../button/button';

export default function OfferBanner({offerType,offerTitle,offerCat,offerImage}){
    return (
        <>
           <div className="offer-card position-relative">
                <img className="w-100 " src={offerImage}/>
                <div className="offer-banner-body  position-absolute top-0">
                    <span className="fs-5">{offerType}</span>
                    <h1 className="display-4 offer-bn-title fw-bolder">{offerTitle}</h1>
                    <span className="fs-5">{offerCat}</span>
                    <div className='banner-btn-section mt-2 w-50'>
                        <Button label={"Shop"} style={"shopbtn-2"}/>
                    </div>
                </div>
            </div>
        </>
    )
}
import './offerBannerSection.css';
import offerImg1 from '../../assets/offer-card1.avif';
import offerImg2 from '../../assets/offer-card2.avif';
import OfferBanner from '../offerBanner/offerBanner';
export default function OfferBannerSection(){
    return (
        <>
            <div className="offer-section">
                <div class="row">
                    <div class="col-6">
                        <OfferBanner offerType={"Holiday Deals"} offerTitle={"Up to 30% off"} offerCat={"Selected Smartphone Brands"} offerImage={offerImg1}/>
                    </div>
                    <div class="col-6">
                        <OfferBanner offerType={"Just In"} offerTitle={"Take Your Sound Anywhere"} offerCat={"Top Headphone Brands"} offerImage={offerImg2}/>
                    </div>
                </div>
            </div>
        </>
    )
}
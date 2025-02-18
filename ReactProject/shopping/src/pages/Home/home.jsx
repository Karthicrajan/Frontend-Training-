import Banner from "../../components/banner/banner";
import offerImg1 from '../../assets/offer-card1.avif';
import './home.css';
import OfferBanner from "../../components/offerBanner/offerBanner";
import OfferBannerSection from "../../components/offerBannerSection/offerBannerSection";
import OrderProcessSection from "../../components/orderProcessSection/orderProcessSection";
import ProductLookSection from "../../components/ProductLookSection/ProductLookSection";
import CategorySection from "../../components/categorySection/categorySection";
import SalesSection from "../../components/saleSection/saleSection";
import OfferBanner2 from "../../components/offerBanner2/offerBanner2";
import BrandSection from "../../components/brandSection/brandSection";
import NewsLetter from "../../components/newsLetter/newsLetter";

export default function Home(){
   
    return(
        <>
        
        <div className="page-body">
            <Banner/>
            <OfferBannerSection />
            <OrderProcessSection />
            <ProductLookSection />
            <CategorySection />
            <SalesSection />
            <OfferBanner2 />
            <BrandSection/>
            <NewsLetter />
           
        </div>
        
        </>
    )
}
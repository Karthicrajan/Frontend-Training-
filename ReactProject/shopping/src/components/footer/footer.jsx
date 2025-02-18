import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import FooterBanner from '../footerBanner/footerBanner';
import './footer.css';
export default function Footer(){
    return (
        <>
        <footer className="footer-section mt-4">
            <FooterBanner />
            <Card>
                <div className='footer-container'>
                    <div class="row row-cols-4">
                        <div class="col">
                            <div className='footer-list-container'>
                                <h4>Store Location</h4>
                                <div className='footer-list-body'>
                                    <ul className='footer-list list-group'>
                                        <li>500 Terry Francine Street</li>
                                        <li>San Francisco, CA 94158</li>
                                        <li>info@mysite.com</li>
                                        <li>123-456-7890</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className='footer-list-container'>
                                    <h4>Shop</h4>
                                    <div className='footer-list-body'>
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
                        </div>
                        <div class="col">
                        <div className='footer-list-container'>
                                    <h4>Customer Support</h4>
                                    <div className='footer-list-body'>
                                        <ul className='footer-list list-group'>
                                            
                                            <Link className="navsub-menu-link" to="/shopAll">Contact Us</Link>
                                            <Link className="navsub-menu-link" to="/shopAll">Help Center</Link>
                                            <Link className="navsub-menu-link" to="/shopAll">About Us</Link>
                                            <Link className="navsub-menu-link" to="/shopAll">Carees</Link>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                        <div className='footer-list-container'>
                                    <h4>Policy</h4>
                                    <div className='footer-list-body'>
                                        <ul className='footer-list list-group'>
                                            
                                            <Link className="navsub-menu-link" to="/shopAll">Shipping & Returns </Link>
                                            <Link className="navsub-menu-link" to="/shopAll">Terms & Conditions</Link>
                                            <Link className="navsub-menu-link" to="/shopAll">Payment Methods </Link>
                                            <Link className="navsub-menu-link" to="/shopAll">FAQ</Link>
                                        </ul>
                                    </div>
                            </div>
                        
                        </div>
                    </div>
                    <hr></hr>
                    <div className='footer-payment'>
                        <p>We accept the following paying methods</p>
                        <ul className='paymentList'>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_69,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visa.png"></img></li>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-mastercard%403x.png"></img></li>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_69,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-amex%403x.png"></img></li>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-chinaunionpay%403x.png"></img></li>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-jcb%403x.png"></img></li>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png"></img></li>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_69,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Discover.png"></img></li>
                            <li><img className='paymenticon' src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_69,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png"></img></li>

                        </ul>
                    </div>
                </div>
            </Card>
        </footer>
        
        </>
    )
}
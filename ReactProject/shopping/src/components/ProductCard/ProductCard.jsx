import './ProductCard.css';
export default function ProductCard({productData, id,click,bodyStyle}){
    const {product_img,product_name,price,offer_price} = productData;

    return(
        <>
        <div className="productCard" onClick={() => click(id)}>
               
               <div className="card" Style={"width: 18rem;"}>
               {offer_price ? <span class="badge rounded-pill text-bg-danger salebg">SALE</span> : null}
                   <img src={product_img} class="card-img-top" alt="..." />
                   <div class={bodyStyle}>
                       <p class="card-text">{product_name}</p>
                       <div className="price-section fs-5">
                          {offer_price ? <><span className="offer-price">{price}</span> <span>{offer_price}</span></> : <span>{price}</span>}
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}
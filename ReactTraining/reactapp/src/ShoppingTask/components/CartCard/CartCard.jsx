import Button from "../Button/Button";
import "./style.css";
export default function CartCard({data}){
    const {id,image, title,price} = data;

    return(
        <>
        <div class="col ct-card" key={id}>
              <div className="card text-center mb-12" >
                  <div className="card-body">
                    <div className="row">
                                <div className="col-2">
                                    <img className="cart-img" id="dtimage" src={image}/>
                                </div>
                                <div className="col-10 cart-con" >
                                     <h5 id="pd-title">{title}</h5>
                                    <p Style={"font-size: large;"}><b>Price: {price}</b></p>

                                     <Button label={"buy"} btnStyle={"btn btn-warning buy-btn"} btnFor={"buy"} />
                                </div>
                              </div>
                    <div>
                  </div> 
                </div>
            </div>
        </div>
        </>
    )
}
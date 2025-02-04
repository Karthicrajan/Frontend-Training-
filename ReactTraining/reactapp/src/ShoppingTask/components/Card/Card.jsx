import "./Card.css";
export default function Card({data,click}){
    const {id,title,price,image} = data; 
    console.log(data);
    return(
        <>
        <div class="col" key={id}>
              <div className="card text-center mb-3" Style={"width: 18rem"}>
                  <div className="card-body">
                    <img className="card-image" src={image}/>
                    <h5 className="card-title">{title}</h5>
                    <span>Price : {price} </span><br/>
                    <button className="btn btn-warning cart-bbt" onClick={() => click(id) }>Buy</button>
                    <div>
                  </div> 
                </div>
            </div>
        </div>
        </>
    )
}
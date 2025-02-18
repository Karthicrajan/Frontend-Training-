import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import "./style.css";
import { removeCard } from "../../../redux/actions/productAction";
export default function CartCard({data}){
    const {id,image, title,price} = data;

    const dispatch = useDispatch();

    const removeItem = (id) =>{
        // setData((preData) => 
        //     preData?.map((item) => item.id == id ? {...item,isAdded : false} : item)
        // );
        dispatch(removeCard(id));
        console.log(id);
    }
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
                                     <Button label={"Remove Item"} btnStyle={"btn btn-warning"} btnFor={"remove"} id={id} clickFun={removeItem} />
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
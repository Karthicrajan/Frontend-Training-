export default function Button(props){
    const {label, btnStyle,btnFor,id,clickFun,isAdded} = props;
  
    return(
        <>{btnFor == "buy" ? <button type="button" className={btnStyle}>{label}</button> : <button type="button" className={btnStyle} id={id} onClick={(e) => clickFun(id)} disabled={isAdded}>{label}</button> }</>
    //  
    )
}
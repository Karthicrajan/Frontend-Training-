
import './button.css'
export default function Button({label, style,onclick}){
  
    // const { label , styles } = btnconf;
    return(
        onclick ? <button type="button" class={style} onClick={() => onclick()}>{label}</button> :  <button type="button" class={style}>{label}</button> 
    )    
}
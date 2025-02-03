import { useState } from "react"
import "./style.css";
export default function Input({label,id,setValue,onChange,value,isErr}){
    const isError = isErr[id];
    console.log(isError);

    return(
        <div className="input-field">
            <label>{label}:</label>
            <input className="input" type="text" name={id} value={value} onChange={e => setValue(e.target.value)}/>
            {isError && <p className="error">Please Enter Valid Data</p>}
        </div>
    )
}
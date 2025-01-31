import { useEffect, useRef, useState } from "react";

export default  function Card({data, onClick,children}){
    // onClick();
    // console.log(data);
    // console.log(children);
    const preValue = useRef();
    const ref2 = useRef();
    const[getValue,setValue] = useState("");
   
   const handleChange  = (e) =>{
        setValue(e.target.value);
        
    }
    useEffect(() => {
        
        preValue.current = getValue;
        console.log(preValue.current);
        ref2.current.value = getValue;
    },[getValue])
    
    return(
        <div>
            <input type="text" value={getValue} onChange={handleChange}></input>
            <input type="text" ref={ref2}></input>
             <h1>{data}</h1>
            {children()}
                <h1>{getValue}</h1>
                <h2>{preValue.current}</h2>
             <button onClick={() => onClick(data)}>click me</button>
        </div>
       
    )
}
function test(data){
    console.log("This is test", data);
}

export {test}
import { useEffect, useState } from "react";
import Input from "../input/input";
import "./style.css"
export default function Form({setData,formState,setFormState,email,name,setEmail,setName,updateId,data,setUpdateId}){
    
    console.log("form reloaded");
    
    const[err,setErr] = useState({emails : false,name : false}); 

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(err.emails);
        let pattern = /^\w+@[a-zA-Z0-9-]+.[a-z]{1,3}$/;
        let eError = pattern.test(email);
        pattern = /^[a-zA-Z \s]+$/;
        let nError = pattern.test(name);

        setErr({
            emails : !eError,
            name : !nError,
        });


        if(eError && nError && formState === 'create'){
            setData((pre) => [...pre,{email : email,name : name}]);
            setEmail("");
            setName("");
            console.log("crete form");
        }else if(eError && nError && formState === 'edit'){
            let newRecord = data[updateId];
            console.log(newRecord);
            newRecord = {
                email,
                name
            }
            setData((prevData) => 
                prevData.map((item, index) => 
                    index == updateId ? { email: email, name: name } : item
                )
            );
            setFormState('create');
            setEmail("");
            setName("");
            setUpdateId();
            console.log("edit form",updateId, data,email, name);
          
        }
        
           
    }
    useEffect(() =>{
        console.log(err);
    },[err])
    
    return (
        <>
            <div className="col-sm-8 mb-8 mb-sm-0 form-card">
                <div className="card">
                    
                    <div className="card-body">
                    <h5 className="card-title">Create Record</h5>
                        <form onSubmit={handleSubmit}>
                            <Input label={"Enter Email"} id={"emails"} value={email} setValue={setEmail} isErr={err} />
                            <Input label={"Enter Name"} id={"name"} value={name} setValue={setName} isErr={err}/>
                             {formState === 'create' ? <button type="submit" className="btn btn-primary">Submit</button> : <button type="submit" className="btn btn-primary">Update</button>}
                        </form>
                    </div>
                </div>
            </div>
        
        </>
        
    )
}
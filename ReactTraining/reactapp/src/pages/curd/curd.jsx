import { useEffect, useState } from "react";
import Form from "../../components/form/form";
import Table from "../../components/table/table";

export default function CurdPage({}){
    const [data,setData] = useState([{email : "karthicrajana@gmail.com",name : "karthicrajan"},{email : "arun@gmail.com",name : "Arun"}]);
    const [formState,setFormState] = useState("create");
    const[email,setEmail] = useState("");
    const[name,setName] = useState("");
    const[updateId,setUpdateId] = useState();
    
    useEffect(()=>{
        if(formState === 'edit'){
            setEmail(data[updateId].email);
            setName(data[updateId].name);
        }
    },[updateId,formState])
    return(
        <div className="container" Style={"margin-top : 50px"}>
            <div className="row">
                <div className="col-4">
                    <Form email={email} name={name} setEmail={setEmail} setName={setName} setData={setData} formState={formState} setUpdateId={setUpdateId} data={data} updateId={updateId} setFormState={setFormState}></Form>
                </div>
                <div className="col-8">
                    <Table data={data} setFormState={setFormState} setData={setData} setUpdateId={setUpdateId} updateId={updateId}/>
                </div>
            </div>
          
        </div>
    )
}
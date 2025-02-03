import "./style.css"
export default function Table({data,setFormState,setUpdateId,setData,updateId}){
    const dataStr = data;
    const handleEdit = (e) =>{
        console.log("edit click",e.target.id);
        setUpdateId(e.target.id);
        setFormState('edit');
    }
    const handleDelete = (e) => {
        console.log("delete click",e.target.id);
        if(e.target.id === updateId){
            alert("This record lock for operations");
            return;
        }
        setData((pre) => pre.filter((item,ind) =>  ind !== parseInt(e.target.id)));

    }
    return(
        <>

       {dataStr.length > 0 ? <table id="table">
                <thead >
                    <tr>
                        {dataStr.length && Object.keys(dataStr[0]).map((item) =>{
                            return <td key={item}>{item}</td>
                        })}
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {dataStr.length && dataStr.map((item,index) =>{
                        return  <tr key={index}>
                        <td key={item.email}>{item.email}</td>
                        <td key={item.name}>{item.name}</td>
                        <td>
                            <button id={index} onClick={handleEdit} type="button" className="btn btn-primary btns">Edit</button>
                            <button id={index} onClick={handleDelete} type="button" className="btn btn-danger">Delete</button>
                        </td>
                        {/* <td></td> */}
                    </tr>
                    })}
                   
                    {/* <tr>
                        <td >Arun P</td>
                        <td>UI task</td>
                       
                    </tr> */}
                </tbody>
        </table>: <p>No records to display</p> }
        </>
    )
}
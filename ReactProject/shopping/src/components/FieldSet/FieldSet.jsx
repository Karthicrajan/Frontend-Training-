import './FieldSet.css'
export default function FieldSet({fieldConf,errorSet,handelChange,value,error}){

    const {label, type, placeHolder,name} = fieldConf;

    console.log(error[name]);
    return(
        <div Style={"margin-bottom: 10px"}>
            <label>{label}</label>
            <input type={type} value={value} className='form-control' placeholder={placeHolder} name={name} onChange={(e) => handelChange(e)}/>
            {error[name].isError ? <p className='error'>{error[name].message}</p> : <></> }
        </div>
    )    
}
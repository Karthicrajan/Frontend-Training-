import { useState } from 'react'
import Button from '../../components/button/button'
import FieldSet from '../../components/FieldSet/FieldSet'
import './register.css'
import { isValidData } from '../../helperFunction/valid';
import { Link } from 'react-router-dom';
export default function Register(){

    const [err,setError] = useState({username : {isError: false,message : "Enter Valid UserName"},
        password : {isError: false,message : "Enter Valid Password"}
        });

    const [registerData , setRegisterData] = useState({username:"",password : ""});


    const handelChange = (event) =>{
        setRegisterData((pre) => ({
            ...pre,
            [event.target.name] : event.target.value,
        }))
        console.log(event.target.name);
    }
    const handleSubmit = (e) =>{

        const pattern  = /^[a-zA-Z]/;
        let usernameEv = isValidData(registerData.username,'^[a-zA-Z]{4}');
        
        if(!usernameEv){
            setError((pre) => ({
                ...pre,
                username : {isError : true,message: "User Name start with alpabets more the 4 length"}
            }))
        }
        if(usernameEv){
            setError((pre) => ({
                ...pre,
                username : {isError : false,message: ""}
            }))
        }

        e.preventDefault();

        
        
        console.log("This is bets");
    }

    return(
        <div className="container login-card">
            <div className="card" Style={"width: 25rem"}>
                <div className="card-body sl-card-body">
                 <h3 className='card-title'>Register</h3>

                 <form onSubmit={handleSubmit}>

                    <FieldSet fieldConf={{label : "UserName",type : "text", placeHolder : "Enter UserName",name : "username" ,styles: "form-control"}}
                     handelChange={handelChange} value={registerData.username} error={err}/>
                    <FieldSet fieldConf={{label : "Password",type : "password", placeHolder : "Enter Password",name : "password" ,styles: "form-control"}} 
                    handelChange={handelChange} value={registerData.password} error={err}/>
                    
                    <Button btnconf={{type: "submit",label: "Sign Up",styles: "btn btn-primary w-100"}}/>
                 </form>
                 
                 
                </div>
                <div className='card-footer'>
                    <p>Have an Account <Link to="/login">Sign Up</Link></p>
                 </div>
            </div>
           
        </div>
    )
}
import { useState } from 'react'
import Button from '../../components/button/button'
import FieldSet from '../../components/FieldSet/FieldSet'
import './login.css'
import { isValidData } from '../../helperFunction/valid';
import { Link } from 'react-router-dom';
export default function Login(){

    const [err,setError] = useState({username : {isError: false,message : "Enter Valid UserName"},
                                    password : {isError: false,message : "Enter Valid Password"}
                                    });

    const [loginData , setLoginData] = useState({username:"",password : ""});
 
    const handelChange = (event) =>{
        setLoginData((pre) => ({
            ...pre,
            [event.target.name] : event.target.value,
        }))
        console.log(event.target.name);
    }
    const handleSubmit = (e) =>{

        const pattern  = /^[a-zA-Z]/;
        let usernameEv = isValidData(loginData.username,'^[a-zA-Z]{4}');
        
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
    console.log(err);
    return(
        <div className="container login-card">
            <div className="card" Style={"width: 25rem"}>
                <div className="card-body sl-card-body">
                 <h3 className='card-title'>Login</h3>

                 <form onSubmit={handleSubmit}>

                    <FieldSet fieldConf={{label : "UserName",type : "text", placeHolder : "Enter UserName",name : "username" ,styles: "form-control"}}
                     handelChange={handelChange} value={loginData.username} error={err}/>
                    <FieldSet fieldConf={{label : "Password",type : "password", placeHolder : "Enter Password",name : "password" ,styles: "form-control"}} 
                    handelChange={handelChange} value={loginData.password} error={err}/>
                    
                    <Button btnconf={{type: "submit",label: "Login",styles: "btn btn-primary w-100"}}/>
                 </form>
                 
                 
                </div>
                <div className='card-footer'>
                    <p>Not have an Account <Link to="/register">Sign Up</Link></p>
                 </div>
            </div>
           
        </div>
    )    
}
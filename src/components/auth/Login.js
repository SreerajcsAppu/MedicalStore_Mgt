
import { useState } from "react";


import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { /*setSigninuser,*/setLogin } from "../../store/usercreateSlice";
import Navbar from "../Navbar";





function Login() {
    var user=useSelector((store)=>store.usercreate.signupuser);
    console.log(user+'hello')
    //var signuppass=useSelector((store)=>store.usercreate.signinuser.password);
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var dispatch=useDispatch()
   
    const navigate = useNavigate();
    function attemptLogin() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        
       if(email.trim()==='' || password.trim()===''){
             setErrorMessage('please enter')
             
             return;
       } 
       if (!emailRegex.test(email.trim())) {
        setErrorMessage('Invalid email format.');
        return;
    }
       const authenticate = user.find(
        (authuser)=>
            authuser.email === email.trim() && authuser.password===password.trim()
    )
       if(authenticate){
        var loginuser={
            
            email:email
        }
        dispatch(setLogin(loginuser))
           //else if(user.username===username.trim()&& user.password===password){     
                  navigate('/')
       }
       else{setErrorMessage('user is not registered.please register')
               
       }
    }
    return (<div>
          <div><Navbar/></div>
        <div className="container pt-5">
            <div className="row mx-auto mt-5 pt-2">
                <div className="col-8 offset-2 mt-5 p-4   " style={{backgroundColor:'rgb(0 0 0 / 57%)'}}>
                    <h1 className="text-center text-primary">Login</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        className="form-control"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"
                        className="form-control"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right ml-2" onClick={attemptLogin}>Login</button>
                        <Link to='/signup/auth'><button className="btn btn-success float-right" >Signup</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupuser } from "../../store/usercreateSlice";
import Navbar from "../Navbar";
import './Signup.css'

function Signup(){
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [confirmpassword,setConfirmpassword]=useState('')
const[message,setMessage]=useState('')
var navigate=useNavigate()
const dispatch=useDispatch()
   const signupsubmit=(event)=>{
    event.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if(email.trim()==='' || password.trim()===''){
        setMessage('please enter the field')
        
        return;
  } 
    if (!emailRegex.test(email.trim())) {
        setMessage('Invalid email format.');
        return;
    }
    if (password===confirmpassword){
        var user={
            email:email,
            password:password
        }
          dispatch(setSignupuser(user));
         navigate('/login')
    }else{
        setMessage('Field is required')
    }
   }

return(
    <div >
        <Navbar/>
        <div>
        {/*{message}
        <form className="" onSubmit={signupsubmit} >
            <label>User name:-</label>
            <input type="text"  onChange={(event)=>setUsername(event.target.value)}/><br/>
            <label>password:-</label>
            <input type="text" onChange={(event)=>setPassword(event.target.value)}/><br/>
            <label>confirm password:-</label>
            <input type="text" onChange={(event)=>setConfirmpassword(event.target.value)}/><br/>
            <button type="submit" >ok</button>
            
        </form>*/}
        <div className="container pt-4">
            <div className="row mt-5">
                <div className="main col-8 offset-2 m-5 mx-auto  p-4 " >
                    <h1 className="text-center text-primary">Signup</h1>
                    {message?<div className="alert alert-danger">{message}</div>:''}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        className="form-control"
                        value={email}
                        required
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
                        <label>Confirm password:</label>
                        <input type="password"
                        className="form-control"
                        value={confirmpassword}
                        onChange={(event)=>setConfirmpassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right ml-2" onClick={signupsubmit}>Signup</button>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}

export default Signup;
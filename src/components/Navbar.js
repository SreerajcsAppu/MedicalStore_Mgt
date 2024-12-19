//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { logoutuser } from "../store/usercreateSlice";

function Navbar() {
    var user = useSelector(store=>store.usercreate.login);
    const dispatch = useDispatch ();
    const navigate= useNavigate();
    
    function logout(){
       
            dispatch(logoutuser())
            
            navigate('/login');
    
    }
  return(
    <div >
     <nav className="navbar navbar-expand-sm navbar-dark " style={{backgroundColor:'rgb(24 0 211 / 73%)'}}>
        <div className="navbar-brand">
            <h4>Medicine Store</h4>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false"
           aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item mr-2">
                <NavLink to={"/"} className={(({isActive})=>(isActive?'nav-link active':'nav-link'))}>
                    Home
                </NavLink>
                </li>
                
       
 <li className="nav-item mr-2">
                <NavLink to={"/medicine_list"} className={(({isActive})=>(isActive?'nav-link active':'nav-link'))}>
                    Medicine List
                </NavLink>
                </li>
 {user? '' : <li className="nav-item mr-2">
                <NavLink to={"/signup/auth"} className={(({isActive})=>(isActive?'nav-link active':'nav-link'))}>
                  Register
                </NavLink>
                </li>}
    {user?
                <li className="nav-item">
                    <NavLink className={(({isActive})=>(isActive?'nav-link active':'nav-link'))} onClick={logout}>Logout</NavLink>
                </li>:
                <li className="nav-item">
                <NavLink 
                to={"/login"} 
                className=
                {(({isActive})=>(isActive?'nav-link active':'nav-link'))}
                
                >
                    Login
                </NavLink>
                </li>
            }
            </ul>
       </div>
    </nav>
    </div>
  )}

export default Navbar;
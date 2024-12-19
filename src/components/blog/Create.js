import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setCreate } from "../../store/crudSclice";
import { useNavigate } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

//change name of component as create

function Create(){
       var medicineStock=useSelector((store)=>store.crud.medicine_list)
       var [errorMessage,setErrormessage]=useState('')
       var [tittle,setTittle]=useState('')
       var[url,setUrl]=useState('')
       var dispatch=useDispatch()
        var navigate=useNavigate()
       function create(){
          if(tittle!=='' && url!=='') {
            var id=medicineStock.length+1
            console.log(id)
           var  data ={
            id:id,
            tittle:tittle,
            url:url,
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString()
           }
           dispatch(setCreate(data))
          const time=new Date().toLocaleDateString()
          console.log(time)
          navigate('/medicine_list')
          }else{setErrormessage('fillup')}
       }
    return(
        <div>
            <Navbar/>
           
        <div className="container">
            
            <div className="row mt-4 pt-5">
                <div className="col-8 offset-2 mt-5  p-3" style={{backgroundColor:'rgb(0 0 0 / 61%)'}}>
                    <h1 className="text-center text-primary mt-3">Add Stocks</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label>Medicine:</label>
                        <input type="text"
                        className="form-control"
                        value={tittle}
                        onChange={(event)=>setTittle(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock:</label>
                        <input type="number"
                        className="form-control"
                        value={url}
                        onChange={(event)=>setUrl(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={create}>Add</button>
                        <Link to='/medicine_list'><button className="btn btn-info float-right mr-2">Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default checkAuth(Create);
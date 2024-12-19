import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import Navbar from "../Navbar";



function View(){
    var {itemid}=useParams()
    console.log(typeof(itemid))
    var numid=Number(itemid)
    console.log(typeof(numid))
    var medicineStock=useSelector((store)=>store.crud.medicine_list)
    var index=itemid-1
    console.log(medicineStock[index].tittle)
    console.log(index)
    
    return (
        <div >
         <div className="pb-5"><Navbar/></div>
        <div className="container mt-5  p-4" style={{backgroundColor:'rgb(0 0 0 / 61%)'}}>  
        <div> <h1 className="text-center text-light">View </h1>  </div><br/>
        <div className="container">
        <table className =" table table-bordered table-light table-responsive-md">
        <tr>
        <th>ID</th>
        <th>Medicine</th>
        <th>Stock</th>
        <th>Created date</th>
        <th>Created time</th>
        </tr>
       
        {
            
        <tr>
        <td>{ medicineStock[index].id}</td>
        <td>{ medicineStock[index].tittle}</td>
        <td>  { medicineStock[index].url}  </td>
        <td>{ medicineStock[index].date}</td>
        <td>{medicineStock[index].time}</td>
        </tr>
        }
        </table>

        <Link to='/medicine_list'><button className="btn btn-primary">Back</button></Link>
        </div>
        </div>
        </div>)
}

export default checkAuth(View)
import { Link } from "react-router-dom"
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setItemFromLocalStorage } from "../../store/crudSclice";
//import { useNavigate } from "react-router-dom"; 
import checkAuth from "../auth/checkAuth";
import Navbar from "../Navbar";



function Medicine_list(){
    var medicineStock=useSelector((store)=>store.crud.medicine_list)
   // var medicineStock=setItemFromLocalStorage()
     var dispatch =useDispatch()
     const [searchterm,setSearchterm]=useState('')
     const [filteredItems, setFilteredItems] = useState([]);
    //  const[items,setItems]=useState(medicineStock)

     //const navigate=useNavigate()
    //  const [sMassage,setSMessage]=useState([{}])

    // pagination var
    const [currentPage,setCurrentPage]=useState(1)
    const data_per_page=2
    const lastIndex=currentPage * data_per_page
    const firstIndex =lastIndex - data_per_page
    const paginatedData =filteredItems.slice(firstIndex,lastIndex)
      
    // change page
    

    const totalPages=Math.ceil(filteredItems.length/data_per_page)
    const number=[...Array(totalPages+1).keys()].slice(1)
    //console.log(number)
    //paginator end

     useEffect(()=>{
       dispatch(setItemFromLocalStorage())
     },[dispatch])//medicineStock

     useEffect(()=>{
     setFilteredItems(medicineStock)
     
    },[medicineStock])


     const handleSearch = (event) => {          //search
       event.preventDefault();
      const results = medicineStock.filter((item) =>
          item.tittle.toLowerCase().includes(searchterm.toLowerCase())
        );
        console.log(results)
       
        setFilteredItems(results);
        setCurrentPage(1)
        // setSMessage(results)
     

        };
        
        
        const searchreset=()=>{            //search reset
         
          setSearchterm('')
          setFilteredItems(medicineStock)
          setCurrentPage(1);
      }

    
        

        //paginate function start
        const handlePrev=()=>{
          if(currentPage!==1){
            setCurrentPage(currentPage - 1)
          }
        }

        const handleNext=()=>{
          if(currentPage !==totalPages){
            setCurrentPage(currentPage + 1)
          }
        }

          const handlePageChange =(num)=>{
            setCurrentPage(num)
          }          //end
    return (
        <div className="">
          <div><Navbar/></div>
        
        <div className="container p-4 mt-5" style={{backgroundColor:'rgb(0 0 0 / 57%)'}}s>
        <div> <h1 className="text-center " style={{color: 'rgb(224,255,255)'}}>Medicine Stock</h1> </div><br/> 
        <form onSubmit={handleSearch} className="m-4">
            <input type="text" value={searchterm} onChange={(e)=>setSearchterm(e.target.value)}/>
            <button type="submit" className="btn  ml-1 btn-sm">Search</button>
            <button onClick={searchreset} className="btn btn-info ml-1 btn-sm">Reset</button>
          </form>
          {}
        <table className =" table table-bordered table-light">
          <thead>
           <tr>
            <th>ID</th>
            <th>Medicine</th>
            <th>Action</th>
           </tr>
          </thead>
        { paginatedData.length!==0?(paginatedData.map((item) => (
          <tbody>  
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.tittle}</td>
            <td className="">
            <Link to={'/view/'+item.id}><button className="btn btn-primary mr-2"> View </button></Link>
            <Link to={'/edit/'+item.id}><button className="btn btn-warning mr-2"> Edit </button></Link>
            <Link to={'/delete/'+item.id}><button className="btn btn-danger mr-2"> Delete </button></Link>          
            </td>
            </tr>
            </tbody>
            ))):(<p className="text-center">{medicineStock.length === 0 ? "No items to fetch" : "No match found"}</p>)}
       
        </table>

        <nav aria-label="page navigation example">
                    <ul className="pagination justify-content-center mt-3">
                        <li className='page-item' >
                            <button className="page-link" onClick={handlePrev}>Previous</button>
                        </li>
                        {number.map((num,index) => (
                            <li  className={`page-item ${currentPage === num ? 'active' : ''}`} key={index}>
                                <button className="page-link" onClick={() => handlePageChange(num)}>{num}</button>
                            </li>
                        ))}
                        <li className='page-item'>
                            <button className="page-link" onClick={handleNext}>Next</button>
                        </li>
                    </ul>
                </nav>
        <Link to='/create'><button className="btn btn-success btn-large">create</button></Link>
        </div>
        </div>)
}

export default checkAuth(Medicine_list)
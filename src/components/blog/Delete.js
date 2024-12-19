import React from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBookmark } from '../../store/crudSclice';
import imgdelete from '../../images/delete.png'


function Delete() {

    const {itemid} = useParams() 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        // const filteredItems = bookmarks.filter( (item) => item.id !== id);
          //setItems(filteredItems);
          dispatch(deleteBookmark(Number(id)))
          navigate('/medicine_list')
       
           };
  return (
    <div className='pt-5'>
        <div className='container m-5  mx-auto'>
            <div className='row m-5 'style={{backgroundImage:`url('https://tse4.mm.bing.net/th?id=OIP.UpSUFcdRNqt4DdlkiY9n4wHaDV&pid=Api&P=0&h=180')`, backgroundSize:'cover',}}>
                <div className='col  '>
                    <div className='card m-lg-4 mt-4'style={{backgroundColor:'hsla(0, 0%, 100%, 0)',border:'none',fontSize:'2em'}}>
                        <div className='card-body text-center '>
                            <p className='text-dark font-weight-bold' >Are you sure want to delete?</p>
                            <button className="btn btn-danger mr-2" onClick={()=>handleDelete(itemid)}>Confirm</button>
                            <Link to={'/medicine_list'} className='btn btn-primary'>Cancel</Link>
                             <img src={imgdelete} alt='pic' style={{float:'left'}}></img>  
                        </div>
                        {/*<img src='https://tse4.mm.bing.net/th?id=OIP.UpSUFcdRNqt4DdlkiY9n4wHaDV&pid=Api&P=0&h=180' alt='delete' style={{height:300}}></img>*/}
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Delete
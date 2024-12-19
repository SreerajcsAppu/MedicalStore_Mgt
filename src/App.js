import './App.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Navbar from './components/Navbar';
import home from './images/img_home_med.webp'


function App() {
  var user=useSelector((store)=>store.usercreate.login)
  
  return (
    <div className="App">
      <Navbar/>
      <div className='container  m-5 mx-auto p-2'>
       <div className='card m-5 ' style={{backgroundColor:'rgb(0 0 0 / 57%)'}}>
        <img src={home} alt='bookmark site' style={{backgroundColor:'hsla(0, 0%, 100%, .1)',maxHeight:'400px'}}></img>{/*https://getinfolist.com/wp-content/uploads/2014/08/top-social-bookmarking-sites-1080x628-1.jpg*/}
        {user?
        
        <diV className='mx-auto '>
        <h1 className='m-3'style={{fontStyle:'italic'}}>Medical Store Management </h1>
        <h3 className='m-3 'style={{color:'#33ffff'}}>Welcome</h3>
        <h6 className='m-3 'style={{color:'gold'}}>now you are able use all our service </h6>
        <div  className='m-3'>
          <Link ><button className='btn-primary'>Keep it digital</button></Link>
        </div>
        <div><h3 style={{color: 'rgb(224,255,255)'}}>Site helps in stock manage</h3></div>
        <div  className='m-3'>
        <Link ><button className='btn-success'>About us</button></Link>
        </div>
        </diV>
        :
        <diV className='mx-auto'>
        <h1 className='m-3 '>Welcome to our site</h1>
        <h4 className='m-3 text-danger'>For more service</h4>
        <div  className='m-3'>
          <Link to='/signup/auth'><button className='btn-primary'>Register</button></Link>
        </div>
        <div><h3 className='text-light'>or</h3></div>
        <div  className='m-3'>
        <Link to='/login'><button className='btn-success'>Login</button></Link>
        </div>
        </diV>
        }
        </div>
        </div>  
        
    </div>
  );
}

export default App;

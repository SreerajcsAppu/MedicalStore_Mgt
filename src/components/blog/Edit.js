import {  useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import Navbar from "../Navbar"
import { useDispatch,useSelector } from "react-redux";
import { editBookmark } from "../../store/crudSclice";
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import Navbar from "../Navbar";

function Edit() {
    const { itemid } = useParams();
    const numid=Number(itemid)
    const medicineStock = useSelector(state => 
        state.crud.medicine_list.find(b => b.id === numid)
    );
    console.log(medicineStock)
  
  const [tittle, setTittle] = useState(medicineStock.tittle);
  const [url, setUrl] = useState(medicineStock.url);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function updatePost() {
    
    var update = {
      id: numid,
      tittle: tittle,
      url: url,
    };
    console.log(numid)
    console.log(tittle)
    console.log(numid)
    dispatch(editBookmark(update));
    navigate("/medicine_list");
  }
  return (
    <div>
      <Navbar/>
      <div className="container pt-5">
        <div className="row pt-3">
          <div className="col-8 offset-2 mt-5 border p-3 "style={{backgroundColor:'rgb(0 0 0 / 61%)'}}>
            <h1 className="text-center">Edit Stock</h1>
            <div className="form-group">
              <label>Medicine:</label>
              <input
                type="text"
                className="form-control"
                value={tittle}
                onChange={(event) => {
                  setTittle(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Stock:</label>
              <input
                type="number"
                className="form-control"
                value={url}
                onChange={(event) => {
                  setUrl(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary float-right"
                onClick={updatePost}
              >
                Submit
              </button>
            </div>
            <Link to='/medicine_list' className="btn btn-outline-light float-left mr-2">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default checkAuth(Edit);

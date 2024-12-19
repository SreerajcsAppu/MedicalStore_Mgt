import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/auth/Login";
import Create from "./components/blog/Create"
import Medicine_list from "./components/blog/medicine_list";
import View from "./components/blog/View";
import Edit from "./components/blog/Edit";
import Signup from "./components/auth/Signup";
import Delete from "./components/blog/Delete";


const router = createBrowserRouter([
    { path: '', element: <App/> },
    {path:'/login', element: <Login/>},
    {path:'/create',element:<Create/>},
    {path:'/medicine_list',element:<Medicine_list/>},
    {path:'/view/:itemid', element:<View/>},
    {path:'/edit/:itemid', element:<Edit/>},
    { path: '/signup/auth', element: <Signup/> },
    {path:'/delete/:itemid',element:<Delete/>}
    ]);
export default router;
import { Outlet } from "react-router-dom";
import MyAppBar from "./AppBar/AppBar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SharedLayout = () => {
  return (
    <>
    <MyAppBar/>
    <ToastContainer/>
    <Outlet/>
    </>

  );
};

export default SharedLayout;
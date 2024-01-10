import { Outlet, Link } from "react-router-dom";

import '../css/general.css'

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="d-flex justify-content-center m-0 p-0 page" >
      <Navigation/>
      <div className="d-flex flex-column justify-content" id="body"> 
        <div className="card p-3 m-3 bg-color-primary border-0 rounded-hard">
          <Outlet/>
        </div>
      <Footer/>
    </div>
    </div>
  )
};

export default Layout;
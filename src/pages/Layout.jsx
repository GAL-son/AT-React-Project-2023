import { Outlet, Link } from "react-router-dom";

import '../css/general.css'

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column justify-content ms-5 me-5"j>
      <Navigation/>
        <div className="card p-3 m-3 bg-body-tertiary border-0 rounded-hard">
          <Outlet/>
        </div>
      <Footer/>
    </div>
  )
};

export default Layout;
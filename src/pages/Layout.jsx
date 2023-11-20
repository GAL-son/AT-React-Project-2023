import { Outlet, Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column justify-content"j>
      <Navigation/>
      <Outlet className="flex-grow-1"/>
      <Footer/>
    </div>
  )
};

export default Layout;
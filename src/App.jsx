import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="md:px-10">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

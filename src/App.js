//import logo from './logo.svg';
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
       
       <BrowserRouter>
        <Navigation></Navigation>
        <div className="container">
        <Routes>
          {/* <Route exact path="Home" element={<Home/>}/>    */}
          <Route exact path="Login" element={<Login/>}/>
          <Route exact path="Registration" element={<Registration/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        <Footer></Footer>
    </> 
  );
}

export default App;

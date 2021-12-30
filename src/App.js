import React  from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,NavLink,} from "react-router-dom";
import Routes1 from "./Routes";
import Reference from "./Reference";
import Counter from "./Counter";
import User from "./User";



function App(){
   
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const logout=()=>{
     localStorage.removeItem("isLoggedIn");
     window.location.reload();
   };
 return(
        <BrowserRouter>
        {/* <User firstname="arun" lastname="pandian" age={27 }gender="male" /> */}
        
       
        {
            isLoggedIn  &&  
               <>
                 <NavLink to="/home" activeClassName="nav">Home</NavLink> |
                 <NavLink to="/about" activeClassName="nav">About</NavLink> |
                 <NavLink to="/posts" activeClassName="nav">Post</NavLink> |
                 <NavLink to="/learn" activeClassName="nav">Learn</NavLink>
                 <button onClick={logout}>LogOut</button>
                 <br/>
        
               </>     
            }
         
         <Routes1/>
         
        </BrowserRouter>
        );
    
}





export default App;
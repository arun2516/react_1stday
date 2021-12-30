import { Route, Routes, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PostApp from "./PostApp";
import Notfound from "./Notfound";
import Login from "./Login";
import reactDom from "react-dom";
import { func } from "prop-types";


function Routes1(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
    <Routes>

    <Route path="/" element={<Navigate replace to="/home"/>}/>
    <Route path="/login" element={ (isLoggedIn ? <Navigate replace to="/home" /> : <Login />)}/>
    <Route path="/home" element={  (isLoggedIn ? <Home name="arun" /> : <Navigate replace to="/login" />)} />
    <Route path="/about" element={(isLoggedIn ? <About /> : <Navigate replace to="/login" />)} />
    <Route path="/myapps" element={<Navigate replace to="/learn"/>}/>
    <Route path="/learn" element={(isLoggedIn ? <Learn /> : <Navigate replace to="/login" />)}>
       <Route path="courses"  element={(isLoggedIn ? <Courses /> : <Navigate replace to="/login" />)}>
           <Route path=":courseid" element={(isLoggedIn ? <CourseId/> : <Navigate replace to="/login" />)}/>
       </Route>
       <Route path="bundles"  element={(isLoggedIn ? <Bundles /> : <Navigate replace to="/login" />)}/>
    </Route>
    <Route path="/dashboard" element={(isLoggedIn ? <Dashboard /> : <Navigate replace to="/login" />)}/>
    <Route path="/posts" element={(isLoggedIn ? <PostApp /> : <Navigate replace to="/login" />)}/>
    <Route path="*" element={<Notfound/>}/>
    
    </Routes>
    );
}

function Learn(){
    return(
        <div>
        <h1>Learn component</h1>
        <h4> all courses are listed here</h4>
        <Link className="btn btn-success" to="/learn/courses">Courses</Link> |
        <Link  className="btn btn-primary" to="/learn/bundles">Bundles</Link>
        <Outlet/>
        </div>
    );
}

function Courses(){
    const courselist=["react","angular","vue","node.js"];
    const randnames=courselist[Math.floor(Math.random()* courselist.length)]

    return(
        <div>
           <h1>Courses list</h1>
           <h4>Courses card</h4>


           <p>More test</p>
           <NavLink   style={({isActive})=>{
               return{
                   backgroundColor: isActive? "pink":"yellow"
               }
           }} to={`/learn/courses/${randnames}`}>{randnames}</NavLink>
           <NavLink className="btn btn-light" to={`/learn/courses/tests`}>tests</NavLink>

           <Outlet/>
        </div>
    )
}

function Bundles(){
    return(
        <div>
            <h1>bundles list</h1>
           <h4>bundles card</h4>
        </div>
    )
}

function CourseId(){
    const navigate = useNavigate();
    const{courseid}=useParams();
    return(
        <div>
            <h1>URL params is :{courseid}</h1>
            <button onClick={()=>{navigate("/dashboard" , {state: courseid})}} className="btn btn-warning">Price</button>
            <Link to="/dashboard" state={"Django"}>Test Link</Link>
           
        </div>
    )
}

function Dashboard(){
    const location = useLocation()
    return(
        <div>
            <h1>Price of the course is {location.state}</h1>
          
        </div>
    )
}

export default Routes1;


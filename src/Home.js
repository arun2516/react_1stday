import { useNavigate } from 'react-router-dom';
import WithBorders from './WithBorders';
import Withlogin from './Withlogin';
import {compose} from "recompose";
function Home(props){
    const navigate = useNavigate();
    return (
    <>
    
    <button onClick={()=> navigate(-1) }>Go Back</button>
    <button onClick={()=> navigate(1)}>Go Forward</button>
    <p>Hello from Home!</p>
    <p>name is : {props.name}</p>
    </>
    )
}

export default compose(WithBorders,Withlogin)(Home);
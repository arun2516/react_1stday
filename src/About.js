import { useNavigate } from 'react-router-dom';
import WithBorders from './WithBorders';

function About({history}){
    const navigate = useNavigate();
    return (
        <>
        
        <button onClick={()=> navigate(-1)}>Go Back</button>
        <button onClick={()=> navigate(1)}>Go Forward</button>
        <p>Hello from About!</p>

        </>
        )
    }

export default WithBorders(About) ;
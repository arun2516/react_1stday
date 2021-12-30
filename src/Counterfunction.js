import React from "react";
import { useState,useReducer,useEffect} from "react";

function Counterfunction(){
    const [count,setcount] = useState(0);


    
    useEffect(()=>{},[]);

   
    useEffect(()=>{});

     
     useEffect(()=>{},[count]);


     useEffect(()=>{return()=>{};},[]);

    



    return(
        <>
        <p>count - {count}</p>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>{if(count>0) setcount(count-1)}}>Decrement</button>
        <button onClick={()=>setcount(0)}>Reset</button>
        </>
    )
}





//------------------------------------------------------------------

//-useReducer

// const countreducer =(count,action)=>{
//     switch(action){
//         case "increment":{
//             return count+1;
//         } 
//         case "decrement":{
//             return count-1;
//         }
//          case "reset":{
//             return 0;
//         } 
//         default:{
//             return count;
//         }
//     }
// };

// function Counterfunction(){
//     const[count,dispatch]=useReducer(countreducer,0);
//     return(
//         <>
//         <p>count - {count}</p>
//         <button onClick={()=>dispatch("increment")}>Increment</button>
//         <button onClick={()=>dispatch("decrement")}>Decrement</button>
//         <button onClick={()=>dispatch("reset")}>Reset</button>
//         </>
//     )
// }


export default Counterfunction;
import {Component,createRef, useRef} from "react";
import PostApp from "./PostApp";


// class Reference extends Component{
//     inputref = createRef();

//     handlesubmit=()=>{
     
//        console.log(this.inputref.current.value);
//     }
//     render(){
//         return(
//         <>
//         <br/>
        
//         <label>UserName(ref):</label>
//         <input ref={this.inputref} type="text"/>
//         <br/>
//         <br/>
//         <button onClick={this.handlesubmit}>Submit</button>
//         <br/>
//         </>
//         );
//     }
// }

function Reference(){
    const postref = useRef();

    const clickme=()=>{
        console.log(postref.current);
    }

    return(
        <>
           <button onClick={clickme}>click</button>
           <PostApp ref={postref}/>
        </>
    )
}

export default Reference;
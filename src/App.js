import React  from "react";
import Counter from "./Counter";
import JobApp from "./JobApp";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
        }
    }
    showhide =()=>{
        this.setState({show:!this.state.show});
    }
   
    render(){

        return(
        <>
        {/* <h1>Hello App!!</h1>
        <button onClick={this.showhide}>Show/Hide :Counter</button>
        {this.state.show?<Counter by={2}/>:<></>} */}
        <JobApp/>
        </>
        )
    }
}



export default App;
import React from "react";

class Counter extends React.PureComponent{
      constructor(props){
          super(props);
          this.state={
              count:0,
              user:{name:"guvi"},

          };
      }

      
increment=()=>this.setState({count:this.state.count+ 1});
    

decrement=()=>{
        if(this.state.count>0)
            this.setState({count:this.state.count-1})};

reset=()=>this.setState({count:0});

Changename=()=>this.setState({user:{name:"arun"}});

    render(){
        console.log("rendering!")
        return(
            <>
            <h2>count:{this.state.count}</h2>
            <h2>name:{this.state.user.name}</h2>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.reset}>reset</button>
            <button onClick={this.Changename}>Changename</button>
            </>
        )
    }
}

export default Counter
import React from "react";

class Counter extends React.Component{
      constructor(props){
          super(props);
          this.state={
              count:0,

          };
      }

      
increment=()=>this.setState({count:this.state.count+ this.props.by});
    

decrement=()=>{
        if(this.state.count>0)
            this.setState({count:this.state.count-this.props.by})};

reset=()=>this.setState({count:0});

static getDerivedStateFromProps(props,state){
    return{by:props.by};
}

shouldComponentUpdate(){
    return true;
}
    

    render(){
        return(
            <>
            <h2>count:{this.state.count}</h2>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.reset}>reset</button>
            </>
        )
    }
}

export default Counter
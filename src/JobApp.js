import React from "react";

class JobApp extends React.Component{
  constructor(props){
      super(props);
      this.state={
          candName:"",
          candAge:"",
          roleApplied:"",
          termsCond:"",
      };
  }

  handlechange=({target:{ name, value, type, checked }})=>{
    //   const state = {...this.state};
    //   state[name]=value;
    //   this.setState(state);
    if(type === "checkbox") value = checked;

    this.setState({...this.state, [name]:value});
  }

  handlesubmit = (e) => {
       e.preventDefault();
  }

render(){
    return(
        <form onSubmit={this.handlesubmit}>
        <h2>Job Application</h2>
        <div>
            <label>Candidate Name: </label>
           <input type="text" name="candName" value={this.state.candName} onChange={this.handlechange}/>
        </div>
        <br />
        <div>
            <label>Candidate Age: </label>
           <input type="number" name="candAge" value={this.state.candAge} onChange={this.handlechange}/>
        </div>
        <br />
        <div>
            <label>Role Applied: </label>
           <select name="roleApplied" value={this.state.roleApplied} onChange={this.handlechange}>
               <option value="Node Developer">Node Developer</option>
               <option value="React Developer">React Developer</option>
               <option value="MERN Developer">MERN Developer</option>
           </select>
        </div>
        <br />
        <div>
            
           <input type="checkbox" name="termsCond" checked={this.state.termsCond} onChange={this.handlechange}/>
           <label>I agree to terms and condition</label>
        </div>
        <br />
        <div>
            <button type="submit">Submit</button>
        </div>

        </form>
    )
}
}

export default JobApp
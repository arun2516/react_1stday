import React from "react";

class JobApp extends React.Component{
  constructor(props){
      super(props);
      this.state={
          candName:"",
          candAge:"",
          roleApplied:"",
          termsCond:"",
          errors:{
              candName:"",
              candAge:"",
              roleApplied:"",
              termsCond:"",

          },
           touched:{
            candName:false,
            candAge:false,
            roleApplied:false,
            termsCond:false,

        },
      };
  }

  handlechange=({target:{ name, value, type, checked }})=>{
    //   const state = {...this.state};
    //   state[name]=value;
    //   this.setState(state);
    if(type === "checkbox") value = checked;

    const errors ={...this.state.errors};
    switch(name){
        case "candName":{
            if(!value){
                errors.candName="   candidate name is requires"
            }else{
                errors.candName="";
            }
            break;

        }

        case "candAge":{
            if(!value){
                errors.candAge="   candidate age is requires"
            }else if (value<18){
                errors.candAge="    candidate age should be 18+"
            }else{
                errors.candAge="";
            }
            break;
            
        }

        case "roleApplied":{
            if(!value){
                errors.roleApplied="    role applied is required"
            }else{
                errors.roleApplied="";
            }
            break;
            
        }
        case "termsCond":{
            if(!value){
                errors.termsCond="   plzz accept terms and condition"
            }else{
                errors.termsCond="";
            }
        }
    }

    this.setState({...this.state, [name]:value,errors:errors});
  }

  handleblur = ({target:{name}})=>{
         const touched={...this.state.touched, [name]:true};
         this.setState({touched});
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
           <input type="text" name="candName" value={this.state.candName} onChange={this.handlechange} onBlur={this.handleblur}/>
           <span className="error">{this.state.errors.candName}</span>
        </div>
        <br />
        <div>
            <label>Candidate Age: </label>
           <input type="number" name="candAge" value={this.state.candAge} onChange={this.handlechange} onBlur={this.handleblur}/>
           <span className="error">{this.state.errors.candAge}</span>
        </div>
        <br />
        <div>
            <label>Role Applied: </label>
           <select name="roleApplied" value={this.state.roleApplied} onChange={this.handlechange} onBlur={this.handleblur}>
               <option value="Node Developer">Node Developer</option>
               <option value="React Developer">React Developer</option>
               <option value="MERN Developer">MERN Developer</option>
           </select>
           <span className="error">{this.state.errors.roleApplied}</span>
        </div>
        <br />
        <div>
            
           <input type="checkbox" name="termsCond" checked={this.state.termsCond} onChange={this.handlechange}  onBlur={this.handleblur}/>
           <label>I agree to terms and condition</label>
           <span className="error">{this.state.errors.termsCond}</span>
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
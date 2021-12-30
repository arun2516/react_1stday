import axios from "axios";
import React from "react";
import {Table} from "react-bootstrap";


const api_url = "https://jsonplaceholder.typicode.com/posts"

class PostApp extends React.Component{
    
   constructor(props){
       super(props);
       this.state = {
           posts:[],
           userId:"",
           title:"",
           body:"",
           
       };
   }

createpost = async () =>{
    try{
        const { userId, title, body} = this.state;
        const { data } = await axios.post(api_url, {userId, title, body,});
        const posts = [...this.state.posts];
        posts.push(data);
        this.setState({ posts, userId:"",title:"",body:"" });
        } catch(err){
            console.error(err);
        }
   };



   getposts = async ()=>{
       try{
        const { data } = await axios.get(api_url);
       
        this.setState({posts: data});
        } catch(err){
            console.error(err);
        }
   };

editpost= (post)=>{
    console.log(post);
    this.setState({...post});

};

updatepost= async ()=>{
    try{
        const { id, userId, title, body} = this.state;
        const { data } = await axios.put(`${api_url}/${id}`, {userId, title, body,});
        const posts=[...this.state.posts];
        const index = this.state.posts.findIndex(post=> post.id === id);
        posts[index] = data;
        this.setState({ posts, id:"", userId:"",title:"",body:"" });
        } catch(err){
            console.error(err);
        }
};

deletepost = async (id) => {
    try{
        await axios.delete(`${api_url}/${id}`);
        const posts = this.state.posts.filter((post)=> post.id !== id);
        this.setState({ posts });
       
        } catch(err){
            console.error(err);
        }

};

handlechange=({target:{name,value}})=>{
    this.setState({[name]:value});
};

handlesubmit= (e) => {
    e.preventDefault();
    if(this.state.id) this.updatepost();
    else this.createpost();
    
};

componentDidMount(){
    this.getposts();
};

   render(){
       return(
       <> 
       <h3>Post App</h3>
       <form onSubmit={this.handlesubmit}>
           <div>
               <label>UserId:</label>
               <input  type="number" name="userId" value={this.state.userId} onChange={this.handlechange}/>
           </div>
           <br/>
           <div>
               <label>Title</label>
               <input name="title" type="text" value={this.state.title} onChange={this.handlechange}/>
           </div>
           <br/>
           <div>
               <label>Body:</label>
               <input name="body" type="text" value={this.state.body} onChange={this.handlechange}/>
           </div>
           <br/>
           <div>
               <button type="submit">Submit</button>
           </div>
           <br/>
       </form>
       <Table striped bordered hover>
           <thead>
               <tr>
                   <th>Id</th>
                   <th>UserId</th>
                   <th>Title</th>
                   <th>Body</th>
               </tr>
           </thead>
           <tbody>
               {this.state.posts.map((post)=>{
                   return (
                       <tr key={post.id}>
                           <td>{post.id}</td>
                           <td>{post.userId}</td>
                           <td>{post.title}</td>
                           <td>{post.body}</td>
                           <td>
                               <button onClick={()=>this.editpost(post)}>Edit</button>
                               <button onClick={()=>this.deletepost(post.id)}>Delete</button>
                           </td>
                       </tr>
                   )
               })}
           </tbody>
       </Table>
       </>
       )
   }
}

export default PostApp;
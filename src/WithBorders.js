function WithBorders(WrappedComponent){
 return(props)=>{
     return(
         <div style={{border:"1px solid black"}}>
         <WrappedComponent {...props}/>;
        </div>
        );
};
}

export default WithBorders;
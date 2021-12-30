function Withlogin(WrappedComponent){
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return(props)=>{
      return <WrappedComponent isLoggedIn={isLoggedIn} {...props} />
  };
}

export default Withlogin;
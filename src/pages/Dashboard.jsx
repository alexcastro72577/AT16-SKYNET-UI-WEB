import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { signInWithGoogle } from "../Firebase";

const Dashboard = () => { 

  const[value]=useState(['https://media0.giphy.com/media/l41lZceUiZ3qocBX2/giphy.gif?cid=ecf05e4794gzzzwp38epjeod1huwjzouzi8a279mowcmf2h3&rid=giphy.gif&ct=g'])
  
  return(   
  <div className="App">       
    <div className="title"> Welcome {localStorage.getItem("name")} to Skynet! <img src={localStorage.getItem("profilePic")} /></div>   
    <section> 
      <br></br>   
      <img src={value} />      
    </section>

  </div>
  ); 

};

export default Dashboard;



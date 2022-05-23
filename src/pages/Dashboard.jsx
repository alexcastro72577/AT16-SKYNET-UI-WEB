import React, { useState } from "react";
import { Link } from 'react-router-dom'
const Dashboard = () => {
  const[value]=useState(['https://media0.giphy.com/media/l41lZceUiZ3qocBX2/giphy.gif?cid=ecf05e4794gzzzwp38epjeod1huwjzouzi8a279mowcmf2h3&rid=giphy.gif&ct=g'])
  return(
  
  <div className="App">
    <section>
    <div className="title"> Welcome to Skynet!</div>
      <img src={value} />
    </section>
    <div>
         <Link to="/booking">
           ir a la home
         </Link>
         <Link to="/dashboard">
           ir al tablero
         </Link>
       </div>

  </div>
  ); 

};

export default Dashboard;

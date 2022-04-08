import style from './style.css'
import React, { useState } from 'react';
import axios from 'axios';
function App() {

  const [joke,setJoke]=useState("");

const generateJoke = ()=>{

  axios
  .get('https://api.chucknorris.io/jokes/random')
  .then((rsp)=> setJoke(rsp.data.value))
  .catch((err)=> console.log(err));

};



  return (
    <div className="container">
        <div className="content">
          <p>{joke}</p>
          
        </div>
        <div className="btn">
          <button onClick={generateJoke}>Click me</button>
        </div>

    </div>
  );
}

export default App;

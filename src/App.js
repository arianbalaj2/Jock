import style from './style.css'
import React, { useState } from 'react';
import axios from 'axios';
function App() {

  const [jock,setJock]=useState("");

const generateJock = ()=>{

  axios
  .get('https://api.chucknorris.io/jokes/random')
  .then((rsp)=> setJock(rsp.data.value))
  .catch((err)=> console.log(err));

};



  return (
    <div className="container">
        <div className="content">
          <p>{jock}</p>
          
        </div>
        <div className="btn">
          <button onClick={generateJock}>Click me</button>
        </div>

    </div>
  );
}

export default App;

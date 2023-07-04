import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetch('/api/videos').then(res => res.json()).then(data =>{
      setVideos(data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> and save to reload.
        </p>
        

        <div>
          {videos.map((id, index) => {
            return (<a key={index} href={`https://youtube.com/watch?v=${id}`} target="__blank">
            <img src={`https://img.youtube.com/vi/${id}/0.jpg`} alt={"video alt n." + index}></img>
            </a>)
          })}
        </div>
      </header>
    </div>
  );
}

export default App;

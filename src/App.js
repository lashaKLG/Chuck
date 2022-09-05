import { useState, useEffect } from 'react';
import './App.css';



const Api ="https://api.chucknorris.io/jokes/random"


function App() {

  const [text, setText] = useState('');
  const generation = () => {
    fetch(Api)
    .then(res => res.json())
    .then((text)=>{
      setText(text.value)
    })
  }
  useEffect(()=>{
    generation()
  },[])

  return (
    
    <div className="App">  
      <h1 className='Headtext'>CHUCK</h1>
      <p dangerouslySetInnerHTML={{__html:text}}/>
      <button className='btn' onClick={generation}>let's go</button>
    </div>
  );
}

export default App;

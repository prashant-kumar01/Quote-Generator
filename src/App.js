import React,{useState} from 'react';
import './App.css';


function App() {
  const [dark,setMode] = useState(false);
  const [quotes, setQuotes] = useState("");

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    })
    
  }

  return (
    <div className={dark ? "dark-mode":"light"}>
      <div className="nav">
      {dark?<i class="fas fa-sun abc"></i>:<i class="fas fa-sun abc pqr xyz"></i>}
            <label className="switch">
            <input type="checkbox"
            onChange={()=>setMode(!dark)}
              />
            <span className="slider round"></span>
            </label>
      {dark?<i class="fas fa-moon abc pqr"></i>:<i class="fas fa-moon abc"></i>}
      </div>
      <div className={dark?"raat content":"din content"}>
        <div className={dark?"box":"box1"}>
        <p>{quotes.text}</p>
        <button onClick={getQuotes}>New Quote</button>
    </div>
    
      </div>
    </div>
  );
}

export default App;

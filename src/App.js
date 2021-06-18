import React,{useState , useEffect} from 'react';
import './App.css';
import SyncLoader from 'react-spinners/SyncLoader';

function App() {
  const [loading,setLoading]=useState(false);
  const [dark,setMode] = useState(false);
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
      setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
    })
    
  }

  return (
    <div className={dark ? "dark-mode":"light"}>
      <div className="nav">
      {dark?<i class="fas fa-sun abc"></i>:<i class="fas fa-sun abc pqr rotate"></i>}
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

        {loading?<div className="Loader"><SyncLoader color={'white'} loading={true} size={20}/></div>:<div>
        {quotes.text}
      </div>}
        <button onClick={getQuotes}>New Quote</button>
    </div>
    
      </div>
    </div>
  );
}

export default App;

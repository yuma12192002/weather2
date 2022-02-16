import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [weather, selectWether] = useState(['晴れ']);
  
  const handleChange2 = (event) => {
    selectWether(event.target.value);
  }

  const h1Style = {
    fontSize : '50px',   
  }

  const Style = {
    fontSize : '50px'
  }

  useEffect (() =>{
    alert(`天気は${weather.toString()}です。`)
  })

  return(
  <>
    <div>
      <h1 id='h1-ttl' style={h1Style}>天気</h1>
      <p style={Style}>場所を選んでください</p>
        <select style={Style}>
            <option  value="tokyo">東京</option>
            <option value="osaka" >大阪</option>
            <option value="sapporo">札幌</option>
        </select>
      <p style={Style}>時間を選んでください</p>
      <select style={Style} onChange={handleChange2}>
          <option value="晴れ">AM 9:00</option>
          <option value="雨">AM 12:00</option>
          <option value="くもり">AM 15:00</option>
      </select>
    </div>
  </>
  )
}

  export default App;


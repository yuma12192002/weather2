import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [weather, selectWether] = useState(['晴れ']);
  
  const handleChange2 = (event) => {
    selectWether(event.target.value);
  }

  const h1Style = {
    fontSize : '15px',
  }

  useEffect (() =>{
    alert(`天気は${weather.toString()}`)
  })

  return(
  <>
    <div>
      <h1 id='h1-ttl' style={h1Style}>天気</h1>
      <p>場所を選んでください</p>
        <select>
            <option value="tokyo">東京</option>
            <option value="osaka">大阪</option>
            <option value="sapporo">札幌</option>
        </select>
      <p>時間を選んでください</p>
      <select onChange={handleChange2}>
          <option value="晴れ">AM 9:00</option>
          <option value="雨">AM 12:00</option>
          <option value="くもり">AM 15:00</option>
      </select>
    </div>
  </>
  )
}

  export default App;


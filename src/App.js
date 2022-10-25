
import './App.css';
import { useState, useMemo, useEffect } from 'react'

//Memo的两个使用场景
function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  console.log('rerender');
  const doubleNumver = useMemo(() => {
    return slowFunction(number)
  },[number])

  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color:dark?'white':'black'
  // }
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color:dark?'white':'black'
    };
  },[dark])

  useEffect(() => {
    console.log('theme change')
  },[themeStyles])
  return (
    <div className="App">
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
      <div style={themeStyles}>{ doubleNumver}</div>
    </div>
  );
}

export default App;

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i <= 10_0000_0000; i++){ }
  return num*2
}

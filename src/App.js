
import './App.css';
import { useState } from 'react';

const App = ()=>{
  const [state, setState] = useState(0);
  const x= ()=>{}
  const onButtonClick = ()=> {
    setState(state + 1);

  };

  return(
    <div className='App'>
      <header className='App-header'>
        <p>{state}</p>
        <button onClick={onButtonClick}>click here</button>
      </header>
     
    </div>
  )
}
export default App;

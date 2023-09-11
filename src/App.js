import './App.css';
import Button from './components/Button';
import logo from './images/logo.png'
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandler = () => {
    setNumClicks(numClicks + 1)
  };

  const restart = () => {
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo'
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button
          text="Click"
          isClickButton={true} 
          clickHandler={clickHandler}  />
        <Button
          text="Restart"
          isClickButton={false} 
          clickHandler={restart} />
      </div>
    </div>
  );
}

export default App;

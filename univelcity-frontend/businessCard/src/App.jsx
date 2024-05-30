import { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront'
function App() {
  
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    
  };

  return ( 
    <>
  <div className={`card ${isFlipped ? "flipped": ""}`}>
    
    <div className="card-inner">
      <CardFront handleFront={handleClick}/>
      <CardBack handleBack={handleClick}/>
    </div> 
    
  </div>

  <div className="footnote">
    <p>Built with React & ❤️</p>
  </div>
  </>
  )
}

export default App;

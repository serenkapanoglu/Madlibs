import React, { useState } from "react";

function Madlibs(){
    
    const [noun, setNoun] = useState('');
    const [noun2, setNoun2] = useState('');
    const [adjective, setAdjective] = useState('');
    const [color, setColor] = useState('');
    const [showSentence, setShowSentence] = useState(false);

  const handleButton = () => {
    if(noun && noun2 && adjective && color) {
        setShowSentence(true);
    }
  };
    const restartGame = () => {
        setShowSentence(false);
        setNoun('');
        setNoun2('');
        setAdjective('');
        setColor('');
    };

    return (
       <>
       <h1>Madlibs!</h1>
       {showSentence ? (
        <div>
        <div>
            <p>{`There was a ${color} ${noun} who loved a ${adjective} ${noun2}.`}</p>
        </div>
        <button onClick={restartGame}>Restart</button>
        </div>
        ):(
        <div className="container">
        <input onChange={(e) =>setNoun(e.target.value)}
        type="text"
        value={noun}
        placeholder="noun"
        />
        <br />
         <input  onChange={(e) =>setNoun2(e.target.value)}
        type="text"
        value={noun2}
        placeholder="noun 2"
        />
         <br />
         <input onChange={(e) =>setAdjective(e.target.value)}
        type="text"
        value={adjective}
        placeholder="adjective"
        />
         <br />
         <input onChange={(e) =>setColor(e.target.value)}
        type="text"
        value={color}
        placeholder="color"
        />
         <br />
        <button onClick={handleButton}>Get Story</button>
        </div>
        )}
       </>
      
    )



}

export default Madlibs;
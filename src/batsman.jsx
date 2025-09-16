import { useState } from "react"

export default function Batsman() {
    const [runs, setRun] = useState(0)
    const [numberOfSix, setNumberOfSix] = useState(0) 
    

    const handleSingle = () =>{
        const newRuns = runs + 1;
        setRun(newRuns);
    }

    const handleFour = () =>{
        const newRuns = runs + 4;
        setRun(newRuns);
        
    }

    const handleSix = () =>{
        const newRuns = runs + 6;
        const updatedSixs = numberOfSix + 1
        setNumberOfSix(updatedSixs)
        setRun(newRuns);
    }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Number of Six: {numberOfSix}</p>
            {
                runs >= 50 && <h1>Your score: Fifty</h1>
            }
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    ) 
}
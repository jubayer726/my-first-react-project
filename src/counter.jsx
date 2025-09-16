import { useState } from 'react'
export default function Counter(){

    const [count, setCont] = useState(0)

    const handleAdd = () =>{
        const newCount = count + 1;
        setCont(newCount);
    }

    const countStyle={
        padding: '10px',
        margin: '10px',
        border: '2px solid yellow'
    }
    return(
        <div style={countStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
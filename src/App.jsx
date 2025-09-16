import Batsman from './batsman'
import './App.css'
import Counter from './counter'

function App() {

  function handleClick() {
    alert("I am Clicked")
  }
    
  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>      
    </>
  )
}

export default App

import Batsman from './batsman'
import './App.css'
import Counter from './counter'
import Users from './users'
import { Suspense } from 'react';
import Posts from './post';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


  const fetchPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
  }




function App() {

  const fetchPromis = fetchPost();

  function handleClick() {
    alert("I am Clicked")
  }
    
  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Posting.........</h3>}>
        <Posts fetchPromis = {fetchPromis}></Posts>
      </Suspense>
 
      <Suspense fallback={<h3>Loading</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>      
    </>
  )
}

export default App

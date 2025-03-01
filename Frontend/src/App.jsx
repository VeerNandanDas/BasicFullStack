/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { axios } from 'axios'
import "./App.css";

function App() {

  const [ jokes , setJokes] = useState([])

  useEffect(()=>{
    axios.get()
  })


  return <>
      <h3>Chai aur FullSTack</h3>
      <p> JOKEs : {jokes.length}</p>


      {
        jokes.map((jokes , index)=>{
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        })
      }





  </>;
}

export default App;

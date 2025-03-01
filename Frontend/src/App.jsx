/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
      .then(response => {
        setJokes(response.data);  
      })
      .catch(error => {
        console.error("Error fetching jokes:", error);
      });
  }, []); 

  return (
    <>
      <h3>Chai aur FullStack</h3>
      <p>Jokes Count: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css'
//import { Button } from './button';
import { User } from './user';
import { Form } from './form';
import { Posts } from './posts';

function App() {
  const [message, setMessage] = useState("Bem vindo ao projeto!");

  return (
    <div>
      <h1 data-testid="header" className="titulo">Natan Lima</h1>
      <p>{message}</p>

      <button onClick={() => setMessage("Estudando testes com reactjs")}>
    	Alterar mensagem
      </button>

      <hr /> <br />

      <User />

      <hr /> <br />
      <Form />

      <br /> <br />
      <Posts />

      
    </div>
  )
}

export default App;
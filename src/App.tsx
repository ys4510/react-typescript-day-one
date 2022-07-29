import React from "react";
import "./App.css";
import TodoPages from "./TodoPages";
import {v4 as uuidv4} from 'uuid';

function App() {

  return (
    <div className="App">
      <TodoPages />
    </div>
  );
}

export default App;

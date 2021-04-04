import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Menu from './components/Menu';
// import 

function clickMe() {
  alert("You clicked me!");
}

function App() {
  return (
  <div>
    <h1>Goblin Shark(coming from App.jsx)</h1>
      <Button onClick = { clickMe } variant="contained" color="primary">
      Hello World
      </Button>
      <Menu/>
  </div>
  )
}
 

export default App;
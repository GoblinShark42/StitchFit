import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Main from './components/MainContainer';
// import Add  from '.components/Add';

function clickMe() {
  alert("You clicked me!");
}

function App() {
  return (
  <div>
    <h1>Goblin Shark(coming from App.jsx)</h1>
      <Button onClick = { clickMe } variant="contained" color="primary">
      Just a Button that doesn't do anything
      </Button>
      
      <Main/>
      {/* <Add /> */}
  </div>
  )
}
 

export default App;
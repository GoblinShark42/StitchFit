// - Listens to the click events
// - When a click event happens, invokes a fetch request to the database
//     DB：GET /wardrobe/accessories
// - .then Displays Modal invoking Modal.jsx passing the result of the GET request

import React, {useState, useEffect} from 'react'
import { render } from 'react-dom';
//import Modal from 'react-modal';
import ReactDOM from 'react-dom';

//Modal.setAppElement('#root')


export const GlobalContext = React.createContext({}); // To pass state to children
function OurModal(props){
  let myData = [];

  const getItem = () => {
    fetch('/wardrobe/addItem', {
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify("{ url: 'http://asefojaisef', type:'tops', user_id:'aeiou' }")
    })
      .then(response => console.log(response.text()))
      .then(data => {
        console.log(JSON.parse(data));
        // this.setState({urls : data});
        // console.log(this.state.urls);
      })
      .catch(error => console.log(error));
  }


  
  return(
    <div>
      <button onClick={getItem} >GET ALL THE ITEMS!!!</button>
      {myData}
      </div>
  )
}

export default OurModal;
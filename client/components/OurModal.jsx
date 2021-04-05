// - Listens to the click events
// - When a click event happens, invokes a fetch request to the database
//     DB：GET /wardrobe/accessories
// - .then Displays Modal invoking Modal.jsx passing the result of the GET request

import React, {useState, useEffect} from 'react'
import { render } from 'react-dom';
//import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import MultipleItemsDisplay from './MultipleItemsDisplay'

//Modal.setAppElement('#root')


export const GlobalContext = React.createContext({}); // To pass state to children
function OurModal(props){
  const [myAccessories, setAccessories] = useState(''); 
  const [myUrls, setUrls] = useState(''); 

  const getItem = () => {
    fetch('/wardrobe/getItems/shoes')
      .then(response => response.json())
      .then(data => {
        setAccessories((data));
        //console.log(data);
        // this.setState({urls : data});
        // console.log(this.state.urls);
      })
      .catch(error => console.log(error));
  }
  /*<div>{myAccessories.map((accessory) =>{
    <div>{accessory.url}</div>
  })}</div>*/

  const parseUrls = () => {
    let temp = []
    for(let i = 0; i < myAccessories.length; i++) {
      temp.push(myAccessories[i].url);
    }
    console.log(temp);
    setUrls(temp);
    console.log(myUrls[0]);
    return temp;
  }
  //{console.log(myAccessories.map((accessory) => accessory.url))}
  
  return(
    <div>
      <button onClick={getItem} >GET ALL THE ITEMS!!!</button>
      <button onClick={() => parseUrls(myAccessories)} >GET URLS!!!</button>
      <MultipleItemsDisplay urls = {myUrls}></MultipleItemsDisplay>
    </div>
  )
}

export default OurModal;
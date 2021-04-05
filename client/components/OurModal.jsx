// - Listens to the click events
// - When a click event happens, invokes a fetch request to the database
//     DB：GET /wardrobe/accessories
// - .then Displays Modal invoking Modal.jsx passing the result of the GET request

import React, {useState, useEffect} from 'react'
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import MultipleItemsDisplay from './MultipleItemsDisplay'

//Modal.setAppElement('#root')


export const GlobalContext = React.createContext({}); // To pass state to children
function OurModal(props){
  const [myItems, setItems] = useState(''); 
  const [pictureUrls, setUrls] = useState(''); 

  console.log(props.category);
  const getItem = () => {
    fetch(`/wardrobe/getItems/${props.category}`)
      .then(response => response.json())
      .then(data => {
        setItems((data));
        console.log(data);
        setUrls({urls : data});
        console.log(pictureUrls);
        // console.log(this.state.urls);
      })
      .catch(error => console.log(error));
  }


  const parseUrls = () => {
    let temp = []
    for(let i = 0; i < myItems.length; i++) {
      temp.push(myItems[i].url);
    }
    setUrls(temp);
    return temp;
  }
  //{console.log(myAccessories.map((accessory) => accessory.url))}
  
  return(
    <div>
      <button onClick={getItem} >GET ALL THE ITEMS!!!</button>
      <button onClick={() => parseUrls(myItems)} >GET URLS!!!</button>
      <MultipleItemsDisplay urls = {pictureUrls}></MultipleItemsDisplay>
    </div>
  )
}

export default OurModal;
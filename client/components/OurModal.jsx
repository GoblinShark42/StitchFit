// - Listens to the click events
// - When a click event happens, invokes a fetch request to the database
//     DB：GET /wardrobe/accessories
// - .then Displays Modal invoking Modal.jsx passing the result of the GET request

import React, {useState, useEffect} from 'react'
import AddItem from './AddItem'
import MultipleItemsDisplay from './MultipleItemsDisplay'

//Modal.setAppElement('#root')


export const GlobalContext = React.createContext({}); // To pass state to children
function OurModal(props){
  const [myItems, setItems] = useState(''); 
  const [pictureUrls, setUrls] = useState(''); 


  return(
    <div>

      {/* AddItem instance is a button that will send POST request to the backend server to add item for the user */}
      <AddItem category = {props.category}></AddItem>
      {/* MultipleItemsDisplay will display all the items belong to the user within the right category.
      For example: All the tops user owns */}
      <MultipleItemsDisplay 
      urls = {props.urls}   
      ids = {props.ids}  
      category = {props.category} 
      draft = {props.draft}
      changeDraft = {props.changeDraft}
      ></MultipleItemsDisplay>
    </div>
  )
}

export default OurModal;
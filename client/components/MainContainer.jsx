// 2. MainContainer.jsx (displays category boxes)
//     ---------------------------------------------------------------------------------
//     Input: User id
//     Renders: Menu buttons 
//     Child Conponent: Modal.jsx <Modal category = 'tops' userId = 'asefjowef83r8'> 
//                      * actual props should be variable names
// --------------------------------------------------------------------
// displaying Modal
// - Listens to the click events
// - When a click event happens, this component creates a Modal with the userId and category 

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import OurModal from './OurModal';
import CategoryButton from './CategoryButton'

Modal.setAppElement('#root');
export const GlobalContext = React.createContext({}); // To pass state to children

function MainContainer(props) {
  const [category, setCategory] = useState(''); // State update
  const [showModal, setModal] = useState(false);

  const [myItems, setItems] = useState(''); 
  const [pictureUrls, setUrls] = useState(''); 
  const [itemIDs, setIDs] = useState(''); 

  // create a useState hook to store and capture the specific Item to add to the outfit builder
  const [draftOutfit, updateDraftOutfit] = useState({
    accessory_id: '',
    accessory_url: '',
    top_id: '0',
    top_url: '',
    bottom_id: '',
    bottom_url: '',
    shoes_id: '',
    shoes_url: ''
  });
 

 const changeTopID = () => {
   // if the category is top: use passed in id, and passed in url to update url
    updateDraftOutfit({...draftOutfit, top_id : '5', top_url : '5 url'});
 }

  // helper function to help modularize state flipping
  const flipModal = currentState => (currentState === false) ? true : false;
  // getUrls function which will be used by CategoryButton and OurModal.jsx 
  // to send GET requests for category items view
  const getUrls = category => {
    console.log(category);
    // wardrobeController.getItemByType handling, will return the whole table
    fetch(`/wardrobe/getItems/${category}`)
    .then(response => response.json())
    .then(data => {
      setItems((data));
    })
    .then(() => {
      let tempURLs = [];
      let tempIDs = [];
      for(let i = 0; i < myItems.length; i++) {
        tempURLs.push(myItems[i].url);
        tempIDs.push(myItems[i].id);
      }
      setUrls(tempURLs);
      setIDs(tempIDs);
    })
    .catch(error => console.log(error));
  }

  // create categoryArray to loop through and instantiate several buttons in return
  const categoryButtons = []
  const categoryArray = ['accessories', 'tops', 'bottoms', 'shoes']
  // methods holder
  const categoryButtonMethods = {      
    setCategory : setCategory,
    getUrls : getUrls,
    setModal : setModal,
    flipModal : flipModal,
  }

  for (let i = 0; i< categoryArray.length; i += 1){
    // drill into CategoryButton the methods that CategoryButton can use
    categoryButtons.push(<CategoryButton category = {categoryArray[i]} func = {categoryButtonMethods}/>)
  }

  console.log('draftOutfit: ', draftOutfit) // prints out 0
  console.log('draftOutfit top_url: ', draftOutfit.top_url) // prints out 0

  return (
    <div id='myElement'>
      {/* instantiate several buttons */}
      {categoryButtons}
      <Modal
        isOpen={showModal}>
        <button onClick={() => {
          setModal(currentState => (currentState === false) ? true : false);
        }}>Close</button>
        <OurModal userId={props.userId} category={category} showModal={showModal} urls = {pictureUrls} ids = {itemIDs}
        // after passing down all urls, also pass types down, currentItem and method to alter currentItem
        changeDraft = {updateDraftOutfit} draft = {draftOutfit}/>
      </Modal>
    </div>
  )
}

export default MainContainer;

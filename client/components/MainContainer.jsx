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

import { auto } from 'async';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import OurModal from './OurModal';
import OutfitContainer from './OutfitContainer';
import CategoryButton from './CategoryButton';
// import '../stylesheets/style.css'; 

Modal.setAppElement('#root');
export const GlobalContext = React.createContext({}); // To pass state to children


const customStyle = {
    overlay: {
    position: 'fixed',
    top: 200,
    left: 0,
    right: 800,
    bottom: 0,
    backgroundColor: '#cfcfcf',
    minWidth: 300,
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: 'white',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}
function MainContainer(props) {
  const [category, setCategory] = useState(''); // State update
  const [showModal, setModal] = useState(false);
  // const [myItems, setItems] = useState(''); 
  // const [pictureUrls, setUrls] = useState(''); 
  // const [itemIDs, setIDs] = useState(''); 

  const [draftOutfit, updateDraftOutfit] = useState({
    user_id: 1, // temporary default user_id
    accessory_id: '',
    accessory_url: '',
    top_id: '',
    top_url: '',
    bottom_id: '',
    bottom_url: '',
    shoes_id: '',
    shoes_url: ''
  });
  
  // helper function to help modularize state flipping
  const flipModal = currentState => (currentState === false) ? true : false;
  
  // create categoryArray to loop through and instantiate several buttons in return
  const categoryButtons = []
  const categoryArray = ['accessories', 'tops', 'bottoms', 'shoes']
  // methods holder
  const categoryButtonMethods = {      
    setCategory : setCategory,
    setModal : setModal,
    flipModal : flipModal,
  }

  for (let i = 0; i< categoryArray.length; i += 1){
    // drill into CategoryButton the methods that CategoryButton can use
    categoryButtons.push(<CategoryButton key = {i} category = {categoryArray[i]} func = {categoryButtonMethods}/>)
  }
  console.log(draftOutfit);


  return (
    <div id="myElement">
      {/* instantiate several buttons */}
      {categoryButtons}
      <div id="mainContent">
        <div id="ourModalDiv">
          {category !== '' && (
            <Modal 
              style={customStyle}
              isOpen={showModal}>
              <button
                onClick={() => {
                  setModal((currentState) =>
                    currentState === false ? true : false
                  );
                }}
              >
                Close
              </button>
              <OurModal userId={props.userId} category={category} showModal={showModal} 
              // after passing down all urls, also pass types down, currentItem and method to alter currentItem
              changeDraft = {updateDraftOutfit} draft = {draftOutfit}/>
            </Modal>
          )}
        </div>
        <div id="outfitContainerDiv">
          <OutfitContainer 
            draftOutfit={draftOutfit}
            // updateDraftOutfit={updateDraftOutfit}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
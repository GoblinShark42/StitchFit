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

  // Temporary placement. Will merge with Dieu's code
  const [draftOutfit, updateDraftOutfit] = useState({
    user_id: 1, // temporary default user_id
    // accessory_id: '',
    // accessory_url: '',
    // top_id: '',
    // top_url: '',
    // bottom_id: '',
    // bottom_url: '',
    // shoes_id: '',
    // shoes_url: ''
    accessory_id: '32',
    accessory_url: 'https://cdn.cnn.com/cnnnext/dam/assets/191211190435-j-crew-ribbed-scarf-super-169.jpg',
    top_id: 43,
    top_url: 'https://n.nordstrommedia.com/id/sr3/e23fdafa-d785-4ea7-8873-ab36529cb8f0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
    bottom_id: 45,
    bottom_url: 'https://n.nordstrommedia.com/id/sr3/e8c7f6ec-2db2-469b-b3e7-059b73ca323d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
    shoes_id: 47,
    shoes_url: 'https://n.nordstrommedia.com/id/sr3/11171ed6-22e3-4c69-8422-591b40889df7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
  });

  return (
    <div id="myElement">
      <button
        onClick={() => {
          setCategory('accessories');
          setModal((currentState) => !currentState); // same as (currentState === false ? true : false)
        }}
      >
        Accessory
      </button>
      <button
        onClick={() => {
          setCategory('tops');
          setModal((currentState) => !currentState);
        }}
      >
        Tops
      </button>
      <button
        onClick={() => {
          setCategory('bottoms');
          setModal((currentState) => !currentState);
        }}
      >
        Bottoms
      </button>
      <button
        onClick={() => {
          setCategory('shoes');
          setModal((currentState) => !currentState);
        }}
      >
        Shoes
      </button>
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
              <OurModal category={category} showModal={showModal} />
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

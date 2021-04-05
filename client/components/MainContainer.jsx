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

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import OurModal from './OurModal';

Modal.setAppElement('#root');
export const GlobalContext = React.createContext({}); // To pass state to children

function MainContainer(props) {
  const [category, setCategory] = useState(''); // State update
  const [showModal, setModal] = useState(false);

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
      {category !== '' && (
        <Modal isOpen={showModal}>
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
  );
}

export default MainContainer;

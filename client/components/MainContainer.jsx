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
// import '../stylesheets/style.css'; 

Modal.setAppElement('#root');
export const GlobalContext = React.createContext({}); // To pass state to children

function MainContainer(props) {
  const [category, setCategory] = useState(''); // State update
  const [showModal, setModal] = useState(false);

  const [myItems, setItems] = useState(''); 
  const [pictureUrls, setUrls] = useState(''); 

  const getUrls = category => {
    console.log(category);
    fetch(`/wardrobe/getItems/${category}`)
    .then(response => response.json())
    .then(data => {
      setItems((data));
      setUrls({urls : data});
    })
    .then(() => {
      let temp = []
      for(let i = 0; i < myItems.length; i++) {
        temp.push(myItems[i].url);
      }
      setUrls(temp);
    })
    .catch(error => console.log(error));
  }

  return (
    <div id='myElement'>
      <button className = 'top-menu-button'
        onClick={() => {
        setCategory('accessories'); 
        getUrls('accessories');
        setModal(currentState => (currentState === false) ? true : false);
      }}>Accessory</button>
      <button  className = 'top-menu-button'
        onClick={() => {
        setCategory('tops');
        getUrls('tops');
        setModal(currentState => (currentState === false) ? true : false);
      }}>Tops</button>
      <button  className = 'top-menu-button'
        onClick={() => {
        setCategory('bottoms');
        getUrls('bottoms');
        setModal(currentState => (currentState === false) ? true : false);
      }}>Bottoms</button>
      <button
        className = 'top-menu-button'         
        onClick={() => {
        setCategory('shoes');
        getUrls('shoes');
        setModal(currentState => (currentState === false) ? true : false);
      }}>Shoes</button>
          <Modal
            style={{
              overlay: {
              position: 'fixed',
              top: 200,
              left: 0,
              right: 500,
              bottom: 0,
              backgroundColor: 'rgba(35, 255, 255, 0.75)'
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
            }}
            isOpen={showModal}>
            <button onClick={() => {
              setModal(currentState => (currentState === false) ? true : false);
            }}>Close</button>
            <OurModal userId={props.userId} category={category} showModal={showModal} urls = {pictureUrls} />
          </Modal>
          </div>

  )
}

export default MainContainer;

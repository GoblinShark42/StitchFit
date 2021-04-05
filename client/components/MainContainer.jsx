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

import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
//import Modal from 'react-modal';
import OurModal from './OurModal';


export const GlobalContext = React.createContext({}); // To pass state to children

function MainContainer(props){  
const [category, setCategory] = useState(''); // State update
const [showAccessory, setShowAccessory] = useState(false); 
// const [showTops, setShowTops] = useState(false); 
// const [showBottoms, setShowBottoms] = useState(false); 
// const [showShoes, setShowShoes] = useState(false); 



  return(     
    <div id = 'myElement'>
      <button onClick={() => {
        setCategory('accessory'); 
        // setShowAccessory(currentState => (currentState === false) ? true : false);
        }}>Accessory</button>
      <button onClick={() => {
        setCategory('tops');
        // setShowTops(currentState => (currentState === false) ? true : false);
        }}>Tops</button>
      <button onClick={() => {
        setCategory('bottoms');
        // setShowBottoms(currentState => (currentState === false) ? true : false);
        }}>Bottoms</button>
      <button onClick={() => {
        setCategory('shoes');
        // setShowShoes(currentState => (currentState === false) ? true : false);
        }}>Shoes</button>
      <h1>{category}</h1>
      <h2>Now you can choose {category} AND OUR TEST: {showAccessory} </h2>
      <OurModal userId = {props.userId} category = {category} showModal = {showAccessory}/> 
    </div>
  )
}

export default MainContainer;

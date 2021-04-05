// 5. AddItem.jsx
// ----------------------------------------------------------------------
// Input: category name, user id
// Renders: Input boxes and add buttons, MultipleItemsDisplay box
// Child Compoents: MultipleItemsDisplay.jsx
//                   <MultipleItemsDisplay
//                         category ='tops'
//                         userId = 'asefjowef83r8',
//                         imgUrl = 'http://abc.com/xxx.jpg',
//                         itemId = '' >
// ----------------------------------------------------------------------
// - Displays input boxes with '+' buttons
// - Listens to onClick events on each button
// - When a click event happens, this coponent sends a POST request to the database passing the input text
//   - POST /wardrobe/addTop
//   - .then if success, displays the success message
//   - .then calls the MultipleItemsDisplay box passing in the returend URL , category name, item id, and user id

import React, { useState, useEffect } from 'react';
// import OutfitContainer from './OutfitContainer';

export const GlobalContext = React.createContext({}); // To pass state to children
function AddRemoveOutfit(props) {
  const [outfitItems, setOutfitItems] = useState('');

  if(outfitItems != '') {
    return (
      <div>
        <button onClick={() => setOutfitItems(props.url)}>add to outfit</button>
        <button onClick={() => setOutfitItems('')}>delete from outfit</button>
        {/* <OutfitContainer url = {outfitItems}></OutfitContainer> */}
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => setOutfitItems(props.url)}>add to outfit</button>
      {/* <OutfitContainer url = {outfitItems}></OutfitContainer> */}
    </div>
  )
}

export default AddRemoveOutfit;
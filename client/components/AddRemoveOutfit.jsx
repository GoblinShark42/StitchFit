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
import Outfit from './Outfit';

export const GlobalContext = React.createContext({}); // To pass state to children
function AddRemoveOutfit(props) {
  const [outfitItems, setOutfitItems] = useState('');
  const change = () => {
    // if the category is top: use passed in id, and passed in url to update url
    console.log('the category is ', props.category);
    if (props.category === 'accessories') { props.changeDraft({ ...props.draft, accessory_id: props.id, accessory_url: props.url }); }
    else if (props.category === 'tops') { props.changeDraft({ ...props.draft, top_id: props.id, top_url: props.url }); }
    else if (props.category === 'bottoms') { props.changeDraft({ ...props.draft, bottom_id: props.id, bottom_url: props.url }); }
    else if (props.category === 'shoes') { props.changeDraft({ ...props.draft, shoes_id: props.id, shoes_url: props.url }); }
  }

  if (outfitItems != '') {
    return (
      <div>
        {/* <button onClick={changeTopID}> update DraftOutfit ID</button> */}
        {/* clicking on "add to outfit" button would alter the draftOutfit state 
        back in MainComponent. Depending on the category, it will alter the right key value pairs */}
        <button onClick={change}>add to outfit</button>
        <button onClick={() => setOutfitItems('')}>delete from outfit</button>
        <Outfit url={outfitItems}></Outfit>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => setOutfitItems(props.url)}>add to outfit</button>
      <Outfit url={outfitItems}></Outfit>
    </div>
  )
}

export default AddRemoveOutfit;
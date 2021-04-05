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

export const GlobalContext = React.createContext({}); // To pass state to children
function AddItem(props) {

  const addItem = addUrl => {
    console.log(props.category);
    fetch('/wardrobe/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url: addUrl, type : props.category, user_id : 4}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  return (
    <div>
      <input id="url-input" type="text" />
      <button onClick={() => addItem(document.getElementById("url-input").value)}>add item</button>
    </div>
  )
}

export default AddItem;
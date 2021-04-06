// - Listens to the click events
// - When a click event happens, invokes a fetch request to the database
//     DB：GET /wardrobe/accessories
// - .then Displays Modal invoking Modal.jsx passing the result of the GET request

import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import MultipleItemsDisplay from './MultipleItemsDisplay';

export const GlobalContext = React.createContext({}); // To pass state to children

function OurModal(props) {
  const [myItems, setItems] = useState('');
  const [pictureUrls, setUrls] = useState([]);
  const [hasItCalled, setHasItCalled] = useState(false);

  const getUrls = (category) => {
    fetch(`/wardrobe/getItems/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);

      })
      .then(() => {
        let temp = [];
        for (let i = 0; i < myItems.length; i++) {
          temp.push(myItems[i].url);
        }
        setUrls(temp);
        setHasItCalled(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!hasItCalled) getUrls(props.category);
  });

  return (
    <div>
      <AddItem category={props.category}></AddItem>
      <MultipleItemsDisplay urls={pictureUrls}></MultipleItemsDisplay>
    </div>
  );
}

export default OurModal;

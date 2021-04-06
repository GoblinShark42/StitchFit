import React, { useState, useEffect } from 'react';



export const GlobalContext = React.createContext({}); // To pass state to children
function OutfitContainer(props) {

// Receive the props 
// Render each item picture
// Listen to submit onClick event
// When click event happens,
// Create Object ={ } with the passed in props
// Submit POST request to DB

  const submitOutfit = (user_id, accessory_id, top_id, bottom_id, shoes_id) => {
    // console.log(props.category);
    fetch('/outfits/newOutfit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id, accessory_id, top_id, bottom_id, shoes_id
      }),
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
      <div id='outfit-container'>
        <h1>Outfit Container</h1>
        <div id="outfit-item-container">
          {/* Render each item picture */}
          <div className = 'outfit-image-container'>
          <img className = 'outfit-items' src = {props.draftOutfit.accessory_url} />
          </div>
          <div className = 'outfit-image-container'>
          <img className = 'outfit-items' src = {props.draftOutfit.top_url} />
          </div>
          <div className = 'outfit-image-container'>
          <img className = 'outfit-items' src = {props.draftOutfit.bottom_url} />
          </div>
          <div className = 'outfit-image-container'>
          <img className = 'outfit-items' src = {props.draftOutfit.shoes_url} />
          </div>
        </div>
        <button id="submitOutfitButton" onClick={() => {
          submitOutfit(props.draftOutfit.user_id, 
            props.draftOutfit.accessory_id,
            props.draftOutfit.top_id, 
            props.draftOutfit.bottom_id,
            props.draftOutfit.shoes_id );
        //  props.updateDraftOutfit();
        }}>Submit Outfit</button>
      </div>
    )
}

export default OutfitContainer;
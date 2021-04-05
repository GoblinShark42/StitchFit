import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext({}); // To pass state to children
function Outfit(props) {
    return (
      <div>
        <img src={props.url}></img>
      </div>
    )
}

export default Outfit;
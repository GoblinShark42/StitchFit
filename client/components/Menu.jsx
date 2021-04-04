import React, {useState, useEffect} from 'react'

function Menu(){
  const [resourceType, setResouceType] = useState(0);
  useEffect (() => {
    fetch(`wardrobe/${resourceType}/`)	
    .then (res => res.json())
    .then(json => console.log(json))
  }, [resourceType]);
  return(
    <div>
      <button onClick={() => setResouceType('tops')}>Tops</button>
      <button onClick={() => setResouceType('accessory')}>Accessory</button>
      <h1>{resourceType}</h1>
    </div>
  )
}

export default Menu;
import React, {useState, useEffect} from 'react'
export const GlobalContext = React.createContext({}); // To pass state to children
function MainContainer({children}){  

  const [resourceType, setResouceType] = useState(0); // State update

  useEffect (() => {
    fetch(`wardrobe/${resourceType}/`)	
    .then (res => res.json())
    .then(json => console.log(json))
  }, [resourceType]);

  const addItem = () => {
    fetch('/wardrobe/addTop', {
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify({url: "url_string"})
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // this.setState({urls : data});
        // console.log(this.state.urls);
      })
      .catch(error => console.log(error));
  }

  return(
    <div>
    <button onClick={() => setResouceType('tops')}>Tops</button>
    <button onClick={() => setResouceType('accessory')}>Accessory</button>
    <h1>{resourceType}</h1>
    <button onClick = {addItem}> Add </button>
  </div>

  )
}

export default MainContainer;
// 2. MainContainer.jsx (displays category boxes)
//     ---------------------------------------------------------------------------------
//     Input: User id
//     Renders: Menu buttons 
//     Child Conponent: CategoryDisplay.jsx <Menu category = 'tops' userId = 'asefjowef83r8'> 
//                      * actual props should be variable names
//     ---------------------------------------------------------------------------------


import React, {useState, useEffect} from 'react'
//import CategoryDisplay from './CategoryDisplay'

export const GlobalContext = React.createContext({}); // To pass state to children
function MainContainer({children}){  
const [resourceType, setResourceType] = useState(''); // State update



  // if(resourceType === 'accessory') {
  //   menuType =  `WE ARE NOW LOOKING AT ACCESSORIES`;
  // } 
  // if(resourceType === 'tops') {
  //   menuType = `WE ARE NOW LOOKING AT TOPS ? YES, ${resourceType}`;
  // }
  // if(resourceType === 'bottoms') {
  //   menuType =  `WE ARE NOW LOOKING AT BOTTOMS ? YES, ${resourceType}`;
  // } 
  // if(resourceType === 'shoes') {
  //   menuType = `WE ARE NOW LOOKING AT SHOES ? YES, ${resourceType}`;
  // }  


  return(
    <div>
      <button onClick={() => setResourceType('accessory')}>Accessory</button>
      <button onClick={() => setResourceType('tops')}>Tops</button>
      <button onClick={() => setResourceType('bottoms')}>Bottoms</button>
      <button onClick={() => setResourceType('shoes')}>Shoes</button>
      <h1>{resourceType}</h1>
      <h2>Now you can choose {resourceType}</h2>
      {/* <CategoryDisplay category = {resourceType} userId = 'asefjowef83r8' />   */}
    </div>
  )
}

export default MainContainer;
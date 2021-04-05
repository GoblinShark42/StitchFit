// 6. MultipleItemsDisplay.jsx
// ----------------------------------------------------------------------
// Input: category name, user id
// Renders: Multiple Items Display box 
//                Previously saved items (if any)
// Child Compoents: ItesDisplay.jsx
//                   <ItemDisplay imgUrl = 'http://abc.com/xxx.jpg'
//                                category ='tops' 
//                                userId = 'asefjowef83r8', 
//                                itemId = ''>
// ----------------------------------------------------------------------
// - Displays Category name 
// - Invokes GET request to DB with category name and userId
//   -DB：GET /wardrobe/accessories
//   - If items exist, displays the ItemDisplay boxes (with pictures and buttons)
//   - If no items were found, do nothing

import React, {useState, useEffect} from 'react'


export const GlobalContext = React.createContext({}); // To pass state to children
function MultipleItemsDisplay(props) {
  const [urls, handleUrls] = useState(props.urls); // State update

  let imgArray = []

  for(let i = 0; i < props.urls.length; i++) {
    imgArray.push(<img src ={props.urls[i]} ></img>)
  }
  
  return (
    <div>
    {imgArray}
    </div>
  )
}


export default MultipleItemsDisplay;
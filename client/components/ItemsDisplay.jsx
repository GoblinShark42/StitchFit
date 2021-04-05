// 7. ItemsDisplay.jsx
// ----------------------------------------------------------------------
// Input: Image URL, item id, user id, category name,
// Render: Item image, '+' button, '-' button
// Child Compoents: OutfitSubmitter.jsx
//                   <OutfitSubmitter 
//                     imgUrl = 'http://abc.com/xxx.jpg'
//                     category = 'tops'
//                     userId = 'asefjowef83r8'
//                     itemId = ''>
// ----------------------------------------------------------------------
// - Displays item picture and  '+' button, '-' button
// - Listens to onClick events on buttons
// - When the add button is clicked 
//       - Checks if there is an open OutfitSubmitter,
//       - Calls OutfitSubmitter.jsx
//           - passing category id, item id, user id, and imageUrl
// - When the delete button is clicked, sends a DELETE request to the database
//           - DELETE /wardrobe/delete:id
//           - deletes the item from the db
//           - if success, remove the node from MultipleItemsDisplay.jsx

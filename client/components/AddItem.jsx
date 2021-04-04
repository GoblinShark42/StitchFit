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

import React from 'react'

const AddItem = (props) => {

  const addItem = () => {
    fetch('/wardrobe/addTop', {
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify("url_string")
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // this.setState({urls : data});
        // console.log(this.state.urls);
      })
      .catch(error => console.log(error));
  }

  render(
      <div>
        <input></input>
        <button onClick = {this.addItem}></button>
      </div>
  )
}

export default AddItem;
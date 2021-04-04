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
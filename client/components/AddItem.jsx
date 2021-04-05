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

import React, { Component } from "react";

// Converted AddItem into a class component
class AddItem extends Component {
	constructor() {
		super();
		this.state = {};
		this.addItem = this.addItem.bind(this);
		this.getItemsByType = this.getItemsByType.bind(this);
	}

	// Revised addItem method
	// Fetch sends url, type, and userId in request body
	addItem(url, type, user_id) {
		const data = {
			url,
			type,
			user_id,
		};
		fetch("/wardrobe/addItem", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				// this.setState({urls : data});
				// console.log(this.state.urls);
			})
			.catch((error) => console.log(error));
	}

	// *****
	// Probably can take this out and use fetch request from parent component
	// *****
	getItemsByType(type) {
		fetch(`/wardrobe/getItems/${type}`, {})
			.then((response) => response.json())
			.then((typeItems) => {
				console.log("typeItems", typeItems);
			})
			.catch((error) => console.log("Error:", error));
	}

	render() {
		return (
			<div id="addItemDiv">
				<input id="itemInput" type="text" placeholder=""></input>
				<button
					onClick={() => {
						// If category is not chosen, alert user and refresh
						if (this.props.resourceType === "") {
							alert(
								"Please choose an item type: Accessory, Top, Bottom, or Shoes"
							);
							location.reload();
							// If category is chosen, add item to clothing_item table
							// Passes in input url, resourceType, and user_id
						} else {
							const itemInput = document.getElementById("itemInput").value;
							this.addItem(
								itemInput,
								this.props.resourceType,
								this.props.user_id
							);
							// Reset input box to blank
							document.getElementById("itemInput").value = "";
							// Load that category again
							// Just being console logged.
							// May use fetch request from parent component / update state
							this.getItemsByType(this.props.resourceType);
						}
					}}
				>
					Add Item
				</button>
			</div>
		);
	}
}

export default AddItem;

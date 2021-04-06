// ---------------------------------------------------------------------------------
// Input: User id, user name
// Renders: Main conteiner and menu buttons
// Child Component: MainContainer.jsx
//                  <MainContainer userId = 'asefjowef83r8' userName = 'Goobly Shark'>
//                  * actual props should be variable names
// ---------------------------------------------------------------------------------
// - Displays main container (that displays category buttons)
// - Displays welcome title with the user name

import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainContainer from "./components/MainContainer";


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      userId : 'asefjowef83r8',
      userName : 'Kirsten PeterShark'
    }
  }

  componentDidMount() {
    // fetch('/')
    // .then(res => res.json())
    // .catch(err => console.log('ERROR ', err));
  }

 //<MainContainer userId="asefjowef83r8" userName="Goobly Shark" />
  render() {
    return (
      <div>
        <h1>Gooblify</h1>
        <p>Welcome {this.state.userName}</p>
        <MainContainer userId={this.state.userId} userName={this.state.userName} />    
      </div>
    );
  }
}

export default App;

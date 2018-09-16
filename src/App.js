import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Tracker from './components/Tracker';
import Review from './components/Review';
import Welcome from './components/Welcome';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDy-kfrbte3ddcuKa_932kDp7sRbQTGpYw",
    authDomain: "trackingproject-31d3e.firebaseapp.com",
    databaseURL: "https://trackingproject-31d3e.firebaseio.com",
    projectId: "trackingproject-31d3e",
    storageBucket: "trackingproject-31d3e.appspot.com",
    messagingSenderId: "829648794120"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      currentView: 'Welcome',
  }
}

goTrack() {
  this.setState({currentView: 'Tracker'});
  console.log(this.state.currentView);
}

goReview() {
  this.setState({currentView: 'Review'});
  console.log(this.state.currentView);
}



  render() {

    return (
      <div className="App">
        <aside>
          <nav>
            <ul>
              <li onClick={()=>this.goTrack()}> Tracker </li>
              <li onClick={()=>this.goReview()}> Review </li> 
            </ul>
          </nav>
        </aside>
        <main>  
         <this.state.currentView />
        </main>
      </div>
    );
  }
}

export default App;
  
import React, { Component } from 'react';

class Tracker extends Component {

	componentDidMount(){
		console.log("should show tracker screen")
	}

	componentWillUnmount() {
		console.log("No more tracker screen")
	}

	render(){
		return(
			<div>
				<p> Tracking form will go here </p>
			</div>
		)
	}
}

export default Tracker;
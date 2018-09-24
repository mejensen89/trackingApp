import React, { Component } from 'react';

class Welcome extends Component {
	
	componentDidMount(){
		console.log("should show welcome screen")
	}

	componentWillUnmount() {
		console.log("No more review screen")
	}

	render(){
		return(
			<div>
				<p> FIrst screen someone sees when they login. Display info about them </p>
			</div>
		)
	}
}

export default Welcome;
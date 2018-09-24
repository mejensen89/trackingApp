import React, { Component } from 'react';

class Review extends Component {

componentDidMount(){
	console.log("should show review screen")
}

componentWillUnmount() {
	console.log("No more review screen")
}
	render(){
		return(
			<div>
				<p> Graphs and options will go here  </p>
			</div>
		)
	}
}

export default Review;
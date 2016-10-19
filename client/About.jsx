import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class About extends Component {

	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}

	render() {
		return (
			<div>
				<h1>About</h1>
				<button onClick={this.setVar}>Sign up</button>
			</div>
		)
	}
}
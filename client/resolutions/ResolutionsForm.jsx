import React, {Component} from 'react';

export default class ResolutionForm extends Component {    

	addResolution(event) {
		event.preventDefault();
		var text = this.refs.resolution.value.trim();
		console.log(text);
		Meteor.call('resolutions.insert', text, () => {
			this.refs.resolution.value = "";	
		});				
		
	}

    render() {
        return (
        	<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
				<input 
					type="text" 
					ref="resolution"
					placeholder="Insert here" />
			</form>
        )
    }
}


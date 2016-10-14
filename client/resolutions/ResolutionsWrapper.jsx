import React from 'react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
import {Resolutions} from '../../imports/api/resolutions.js';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				resolutions:  Meteor.subscribe('allResolutions')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolutions.stop();
	}

	render() {		
		return (
			<div>
				<h1>My resolutions</h1>
				<ResolutionsForm />
				<ul className="resolutions">
					{this.props.resolutions.map( (resolution) => {
						return <ResolutionSingle key={resolution._id} resolution={resolution}/>	
					})}	
				</ul>
			</div>
		)
	}
}


export default createContainer(() => {
  return {
    resolutions: Resolutions.find({}).fetch(),
  };
}, ResolutionsWrapper);

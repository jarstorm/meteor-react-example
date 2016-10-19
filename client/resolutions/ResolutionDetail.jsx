import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { createContainer } from 'meteor/react-meteor-data';
import {Resolutions} from '../../imports/api/resolutions.js';


export default class ResolutionDetail extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				resolution:  Meteor.subscribe('userResolutions')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolution.stop();
	}

	render() {
		let res = this.props.resolution;

		if (!res) {
			return(<div>loading..</div>)
		}

		return(
			<h1>{res.text}</h1>
		)
	}
}


export default createContainer((params) => {
  return {
    resolution: Resolutions.findOne(params.id),
  };
}, ResolutionDetail);

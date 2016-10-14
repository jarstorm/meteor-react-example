import {Resolutions} from '../imports/api/resolutions.js';

Meteor.publish("allResolutions", function() {
	return Resolutions.find();
})
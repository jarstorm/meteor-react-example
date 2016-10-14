import {Resolutions} from '../imports/api/resolutions.js';


Meteor.methods({
	'resolutions.insert'(text) {
		console.log(text);
		check(text, String);

		// Make sure the user is logged in before inserting a task
		/*if (! this.userId) {
		throw new Meteor.Error('not-authorized');
		}*/

		Resolutions.insert({
			text,
			complete: false,   
			createdAt: new Date()   
		});
	},

	toggleResolution(id, status) {
		Resolutions.update(id, {$set: {complete: !status}});
	},

	deleteResolution(id) {
		Resolutions.remove(id);
	}
});
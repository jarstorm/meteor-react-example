import {Resolutions} from '../imports/api/resolutions.js';


Meteor.methods({
	'resolutions.insert'(text) {
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		console.log(text);
		check(text, String);

		Resolutions.insert({
			text,
			complete: false,   
			createdAt: new Date(),
			user: Meteor.userId()
		});
	},

	toggleResolution(resolution, status) {
		if (Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.update(resolution._id, {$set: {complete: !resolution.complete}});
	},

	deleteResolution(resolution) {
		if (Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.remove(resolution._id);
	}
});
Template.postsList.helpers({

posts: function() {
	return Posts.find();
}

});

Template.postsList.events({

	'click button': function() {
		var postId = this._id;
		Meteor.call('removePost', postId);
	}

});
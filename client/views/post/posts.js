Template.postsList.helpers({

posts: function() {
	return Posts.find();
}

});

Template.postsList.events({

	'click button': function() {
		Posts.remove(this._id);
	}

});
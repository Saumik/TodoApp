Meteor.publish('posts', function () {
	return Posts.find({createdBy: this.userId}, {sort: {date_created: -1}});
});
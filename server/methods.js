Meteor.methods({
	'sendlog':function(addpost){
	 var currentUserId = Meteor.userId();
     Posts.insert({ name: addpost,
  					createdBy: currentUserId
  				 });
	},
	'removePost': function(postId){
		Posts.remove(postId);
	}
});
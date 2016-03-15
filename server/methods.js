Meteor.methods({
	'sendlog':function(addpost, date){
	 var currentUserId = Meteor.userId();
     Posts.insert({ name: addpost,
     				date: date,
  					createdBy: currentUserId
  				 });
	},
	'removePost': function(postId){
		Posts.remove(postId);
	}
});
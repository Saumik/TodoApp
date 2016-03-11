Template.addPost.events({

'keypress input.addPost': function (evt, template) {
	var addpost = template.find(".addPost").value;
    if (evt.which === 13 && addpost != "") {
      Posts.insert({ name: addpost});
    }
  }

});
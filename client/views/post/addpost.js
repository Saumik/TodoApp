Template.addPost.events({

'keypress textarea.addPost': function (evt, template) {
	var addpost = template.find(".addPost").value;
    if (evt.which === 13 && addpost != "" && Meteor.user() != null) {
    	Meteor.call('sendlog', addpost);
    }
  }
});

Template.addPost.rendered = function() {
  tinymce.init({
    selector: 'textarea'
  });
};

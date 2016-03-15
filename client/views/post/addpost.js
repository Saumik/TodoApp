Template.addPost.events({

'click .confirm': function(event){
event.preventDefault();
var addPost = tinyMCE.activeEditor.getContent();
var date = moment().format('MMMM Do YYYY, h:mm a')
Meteor.call('sendlog', addPost, date);
}
});

Template.addPost.rendered = function() {
  tinymce.init({
  selector: 'textarea',
  height: 500,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  content_css: [
    '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
    '//www.tinymce.com/css/codepen.min.css'
  ]
});
};

Router.configure({
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});


Router.map(function() {
	this.route('postsList', { path: '/'});
	this.route('help', { path: 'faq'});


});
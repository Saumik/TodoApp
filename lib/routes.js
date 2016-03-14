Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
	waitOn: function() { return Meteor.subscribe('posts'); }
});


Router.map(function() {
	this.route('postsList', { path: 'postlist'});
	this.route('addPost', { path: 'addpost'});
	this.route('login', { path: '/'});
	this.route('help', { path: 'faq'});
});
Router.configure({
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('postsList', { path: '/'});
	this.route('help', { path: 'faq'});


});
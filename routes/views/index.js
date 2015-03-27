var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res),
			locals = res.locals;

	locals.section = 'index';

	locals.defaultPictureDescription = [
		'Copyright (&copy;) 2015 by ',
		'<strong>Celeste Korol</strong>. ',
		'All Rights Reserved.'
	].join('');

	view.query('homepage', keystone.list('HomePage').model.findOne());

	// Load the galleries by sortOrder
	view.query('gallery', keystone.list('Gallery').model.findOne({displayOnHomePage: true}));

	// Render the view
	view.render('index');

};

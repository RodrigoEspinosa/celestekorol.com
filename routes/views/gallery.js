var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// Set locals
	locals.section = 'gallery';

	locals.defaultPictureTitle = [
		'Copyright (&copy;) 2015 by ',
		'<strong>Celeste Korol</strong>. ',
		'All Rights Reserved.'
	].join('');

	view.query('homepage', keystone.list('HomePage').model.findOne());

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));

	// Render the view
	view.render('gallery');

};

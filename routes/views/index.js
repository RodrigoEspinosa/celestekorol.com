var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res),
			locals = res.locals;

	view.on('init', function (next) {
	  var HomePage = keystone.list('HomePage').model;

		HomePage.findOne({}, function (err, homePage) {
			if (err) console.error(err);

			locals.intro = homePage.intro;
			locals.screenOne = homePage.screenOne;
			locals.screenTwo = homePage.screenTwo;

			next(err);
		});
	});

	view.on('init', function (next) {
	  var Gallery = keystone.list('Gallery').model;

		locals.gallery = [];

		Gallery.findOne({}, function (err, gallery) {
			if (err) console.error(err);

			locals.gallery = gallery;

			console.log(locals.gallery);

			next(err);
		});
	});

	// Render the view
	view.render('index');

};

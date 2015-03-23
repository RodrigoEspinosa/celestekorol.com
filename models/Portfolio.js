var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Portfolio Model
 * ===============
 */

var Portfolio = new keystone.List('Portfolio', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Portfolio.add({
	images: { type: Types.CloudinaryImages }
});

Portfolio.register();

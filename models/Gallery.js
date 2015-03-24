var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
	displayOnHomePage: { type: Boolean, default: false }
});

Gallery.defaultColumns = 'name, displayOnHomePage|20%, publishedDate|20%';
Gallery.register();

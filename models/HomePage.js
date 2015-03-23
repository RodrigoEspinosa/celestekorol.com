var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * HomePage Model
 * ==============
 */

var HomePage = new keystone.List('HomePage', {
	plural: 'homepage'
});

HomePage.add({
	intro: {
		image: { type: Types.CloudinaryImage },
		title: { type: String },
		text: { type: Types.Html, wysiwyg: true, height: 150 }
	},
	screenOne: {
		image: { type: Types.CloudinaryImage },
		title: { type: String },
		text: { type: Types.Html, wysiwyg: true, height: 150 }
	},
	screenTwo: {
		image: { type: Types.CloudinaryImage },
		title: { type: String },
		text: { type: Types.Html, wysiwyg: true, height: 150 }
	},
	contact: {
		title: { type: String },
		text: { type: Types.Html, wysiwyg: true, height: 150 }
	}
});

// HomePage.schema.virtual('content.full').get(function() {
// 	return this.content.extended || this.content.brief;
// });

// HomePage.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
HomePage.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
HomePage.register();

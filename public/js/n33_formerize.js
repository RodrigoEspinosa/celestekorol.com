(function ($) {

	$.fn.n33Formerize = function () {
		var _fakes = [],
				_form = $(this);

		_form.find('input[type=text],textarea').each(function () {
			var e = $(this);

			if (e.val() == '' || e.val() == e.attr('placeholder')) {
				e.addClass('formerize-placeholder');
				e.val(e.attr('placeholder'));
			}
		}).blur(function () {
			var e = $(this);

			if (e.attr('name').match(/_fakeformerizefield$/)) return undefined;

			if (e.val() == '') {
				e.addClass('formerize-placeholder');
				e.val(e.attr('placeholder')); } }).focus(function () {
					var e = $(this);

					if (e.attr('name').match(/_fakeformerizefield$/)) return undefined;

					if (e.val() == e.attr('placeholder')) {
						e.removeClass('formerize-placeholder');

						e.val('');
					}
				});

				_form.find('input[type=password]').each(function () {
					var e = $(this);
					var x = $($('<div>').append(e.clone()).remove().html()
						.replace(/type="password"/i, 'type="text"')
						.replace(/type=password/i, 'type=text'));

					if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield');
					if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield');

					x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e);

					if (e.val() == '') {
						e.hide();
					} else {
						x.hide();
					}

					e.blur(function (event) {
						event.preventDefault();

						var e = $(this);
						var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]');
						if (e.val() == '') {
							e.hide();
							x.show();
							}
					});

					x.focus(function(event) {
						event.preventDefault();
						var x = $(this),
								e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']');

						x.hide();
						e.show().focus();
					});

					x.keypress(function (event) {
						event.preventDefault();
						x.val('');
					});
				});

				_form.submit(function () {
					$(this).find('input[type=text], input[type=password], textarea').each(function (event) {
						var e = $(this);

						if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', '');

						if (e.val() == e.attr('placeholder')) {
							e.removeClass('formerize-placeholder');
							e.val('');
						}
					});
				}).bind('reset', function (event) {
					event.preventDefault();

					$(this).find('select').val($('option:first').val());
					$(this).find('input, textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };

}(jQuery));
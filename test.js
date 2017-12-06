const i18next = require('i18next');
const path = require('path');
const inspector = require('inspector');

i18next.init({
	resGetPath	: path.join( __dirname, 'locales', '__lng__.json' ),
	lng			: 'nl',
	fallbackLng	: 'en'
}, ( err, t ) => {

	inspector.open();

	setTimeout(() => console.log('Timed out. Stopping program'), 100000)
});
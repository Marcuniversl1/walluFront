const { themeForms } = require('./theme/forms');
const { themeColors } = require('./theme/colors');
const { themeImages } = require('./theme/images');
const { themeMessages } = require('./theme/messages');
const { themeRoutes } = require('./theme/routes');

module.exports = {
  name: 'Theming File',
  colors: themeColors,
  messages: themeMessages,
  images: themeImages,
  forms: themeForms,
  routes: themeRoutes,
};

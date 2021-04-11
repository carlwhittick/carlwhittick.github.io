var path = require('path')

module.exports = {
  lang: 'en-US',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',

  head: [],

  theme: path.resolve(__dirname, 'theme'),
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
var path = require('path')

const fooTheme = {
  name: 'vuepress-theme-carlwhittick',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    // 404: path.resolve(__dirname, 'layouts/404.vue'),
  },
}
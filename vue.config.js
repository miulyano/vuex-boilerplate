const path = require('path');
const appConfig = require('./src/app.config');

module.exports = {
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  },
  // Configure Webpack's dev server.
  // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
  devServer: {
  },
  pages: {
    index: {
      entry: './src/main.js',
      template: './src/views/index.pug'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        path.resolve(__dirname, 'src/styles/*.scss')
      ],
      preProcessor: 'scss'
    }
  }
};

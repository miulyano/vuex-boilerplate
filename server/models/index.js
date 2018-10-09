const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let url = 'mongodb://admin:admin123@ds111913.mlab.com:11913/vuex-demo';

// connect database
mongoose.connect(url, { useNewUrlParser: true });

// event connected
mongoose
  .connection
  .on('connected', () => {
    console.log(`Mongoose connection open: ${url}`);
  });

// event error
mongoose
  .connection
  .on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
  });

// event disconnected
mongoose
  .connection
  .on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

// event SIGINT
process.on('SIGINT', () => {
  mongoose
    .connection
    .close(() => {
      console.log('Mongoose connection disconnected. App termination');
      process.exit(0);
    });
});

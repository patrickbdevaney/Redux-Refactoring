const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
 useUnifiedTopology: true,

});

module.exports = mongoose.connection;

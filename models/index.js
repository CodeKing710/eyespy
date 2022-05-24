const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//Add more Schemas and Models below (Try to match name of model to export name)
exports.User = require("./user");
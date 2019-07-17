const mongoose = require('mongoose');


const MONGODB_CONNECTION = process.env.MONGODB_ATLAS || `mongodb://localhost/${process.env.MONGO_DATABASE}`


mongoose.connect(MONGODB_CONNECTION,{
  useNewUrlParser: true
})
.catch(error => {
  console.log("error happened when to reach mongodb connection", error);
})

const db = mongoose.connection;

module.exports = db;

//
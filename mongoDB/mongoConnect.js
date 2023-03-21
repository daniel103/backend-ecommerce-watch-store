const mongoose = require('mongoose');
const {config}= require("../config/secreet")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@cluster0.eudv1le.mongodb.net/?retryWrites=true&w=majority`);
  console.log("mongo connect myProject atlas")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
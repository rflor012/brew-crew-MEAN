const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const USERROLES = ["0", "1", "2"];

const userSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
  username: {type: String, unique: true},
  beerList:[{type: Schema.Types.ObjectId}],
  favBreweries:[{type: Schema.Types.ObjectId}],
  role: {type:String, enum: USERROLES },
  reviews: [{type: Schema.Types.ObjectId}],
  userImage: String,
  barCrawlLoc:[{type: Schema.Types.ObjectId}]
},{timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;

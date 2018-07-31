const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brewerySchema = new Schema({
  name: String,
  location: [{
    address: String,
    zip: String,
    city: String
  }],
  phone: String,
  site: String,
  beers: [{type: Schema.Types.ObjectId, ref: "Beer"}],
  promotion: [{type: Schema.Types.ObjectId, ref: 'Promotion'}],
  hours: String,
  coverCharge: String
});


const Brewery = mongoose.model('Brewery', brewerySchema)



module.exports = Brewery;
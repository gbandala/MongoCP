const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Model = new Schema({
Estado: { type: String, required: false},
Ciudad: { type: String, required: false},
Municipio: { type: String, required: false },
Colonia: { type: String, required: false},
CP: { type: Number, required: false}
},{collection:'cp'});

module.exports = mongoose.model('cp', Model);

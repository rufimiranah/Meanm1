const mongoose = require("mongoose");

const PrestationSchema = new mongoose.Schema({
  _id: String,
  libelle_service: String,
  description_service: String,
});
module.exports = mongoose.model("services", PrestationSchema, "Services");

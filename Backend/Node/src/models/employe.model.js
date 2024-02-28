const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const EmployeSchema = new mongoose.Schema({
  _id: String,
  id_role: ObjectId,
  mail: String,
  password: String,
  debutHeure: Number,
  finHeure: Number,
  description: String,
});
module.exports = mongoose.model("employe", EmployeSchema, "Employe");

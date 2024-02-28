const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const RdvSchema = new mongoose.Schema({
  id: String, // ID du rendez-vous
  id_utilisateur: ObjectId, // ID de l'utilisateur
  id_employe: ObjectId, // ID de l'employé
  id_detail: ObjectId, // ID de la prestation
  dateHeureRDV: Date, // Heure de début du rendez-vous aaa date ndray ty fa manahirana
  statut: String, // Statut du rendez-vous
});
module.exports = mongoose.model("rdv", RdvSchema, "Rendez-vous");

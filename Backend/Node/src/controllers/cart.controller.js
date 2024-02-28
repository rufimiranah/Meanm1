const employeService = require("../models/employe.model");
const RendezVous = require("../models/rdv.model");
const genererHoraires = require("../services/horaire.service");
const Employe = require("../models/employe.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

//Fonction maka employés rehetra
const getAllEmploye = async (req, res) => {
  try {
    const Employe = await employeService.find();
    return res.status(200).json({ Employe });
  } catch (error) {
    console.error("Erreur lors de la récupération des Employe :", error);
    return res.status(500).json({
      message: "Erreur serveur lors de la récupération des Employe.",
    });
  }
};

async function getHoraires(req, res) {
  const { jour, idEmploye } = req.query;
  const employe = await Employe.findById(idEmploye);
  if (!employe) {
    return res.status(404).send("Employé non trouvé");
  }
  const rendezVous = await RendezVous.find({ id_employe: idEmploye });
  const jourDate = new Date(jour);

  // Générer les horaires disponibles
  const horaires = genererHoraires(jourDate, employe, rendezVous);

  // Envoyer les horaires en réponse
  res.json(horaires);
}
const createRdv = async (req, res) => {
  try {
    const { id_utilisateur, id_employe, id_detail, dateRdv, statut } = req.body;

    // Créer un nouveau rendez-vous
    console.log(dateRdv);

    const newRdv = new RendezVous({
      id_utilisateur: new ObjectId(id_utilisateur),
      id_employe: new ObjectId(id_employe),
      id_detail: new ObjectId(id_detail),
      dateHeureRDV: new Date(), // Convertir la date en objet Date
      statut: statut,
    });

    // Enregistrer le nouveau rendez-vous dans la base de données
    const savedRdv = await newRdv.save();

    // Envoyer une réponse avec le rendez-vous enregistré
    res.json(savedRdv);
  } catch (error) {
    console.error("Erreur lors de la création du rendez-vous :", error);
    res.status(500).json({
      message: "Erreur serveur lors de la création du rendez-vous.",
    });
  }
};
const getEmployeById = async (req, res) => {
  try {
    // Récupérer l'ID de l'employé depuis les paramètres de la requête
    const employeId = req.params.id;

    // Vérifier si l'ID de l'employé est fourni
    if (!employeId) {
      return res.status(400).json({ message: "ID de l'employé non fourni" });
    }

    // Récupérer l'employé depuis la base de données en utilisant l'ID
    const employe = await employeService.findById(employeId);

    // Vérifier si l'employé existe
    if (!employe) {
      return res
        .status(404)
        .json({ message: "Aucun employé trouvé avec cet ID" });
    }

    // Retourner l'employé
    return res.status(200).json({ employe });
  } catch (error) {
    console.error("Erreur lors de la récupération de l'employé :", error);
    return res.status(500).json({
      message: "Erreur serveur lors de la récupération de l'employé.",
    });
  }
};

module.exports = { getAllEmploye, getHoraires, createRdv, getEmployeById };

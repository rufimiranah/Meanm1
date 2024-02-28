// app.js
const express = require("express");
const app = express();
const customerRoutes = require("./src/routes/customer.route.js");
const prestationRoutes = require("./src/routes/prestation.route.js");
const cartRoutes = require("./src/routes/cart.route.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressListRoutes = require("express-list-routes");
const RendezVous = require("./src/models/rdv.model");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://Meanm1db:MirantsoaSaotra@cluster0.lb6lr6y.mongodb.net/MEAN_BeautySalon?retryWrites=true&w=majority"
);

app.listen(3000, () => {
  expressListRoutes(app);
  console.log("Le serveur est démarré sur le port 3000");
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error login to sql db"));
console.log("connection sucess");

app.use(
  cors({
    origin: true,
  })
);
app.use(bodyParser.json());

app.use("/api/customers", customerRoutes);
app.use("/api/prestations", prestationRoutes);
app.use("/api/cart", cartRoutes);
app.get("/api/rendezvous/dates", function (req, res) {
  // Utilisation de la méthode find() pour récupérer tous les rendez-vous
  RendezVous.find({}, "dateHeureRDV")
    .then((rendezvous) => {
      // Si aucun erreur, récupérer les dates de chaque rendez-vous

      const dates = rendezvous.map((rdv) => rdv.dateHeureRDV);
      // Envoyer les dates en réponse
      res.send(dates);
    })
    .catch((err) => {
      // Gérer l'erreur, par exemple en renvoyant une réponse d'erreur
      console.error("Erreur lors de la récupération des rendez-vous :", err);
      res.status(500).json({
        message: "Erreur serveur lors de la récupération des rendez-vous.",
      });
    });
});

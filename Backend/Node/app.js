// app.js
const express = require("express");
const app = express();
const customerRoutes = require("./src/routes/customer.route.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressListRoutes = require("express-list-routes");
const { insert_Customer } = require("./src/services/utilisateur.service.js");

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

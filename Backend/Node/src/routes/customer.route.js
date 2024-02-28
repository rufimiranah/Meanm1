const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");
const customerService = require("../services/customer.service");
const cors = require("cors");

// Endpoint pour l'inscription d'un client
router.post("/signup", customerController.signUp);
router.post("/login", customerController.login);
router.get("/customers", customerService.getAllCustomers);
router.get("/mail", customerService.getUserByEmail);
module.exports = router;

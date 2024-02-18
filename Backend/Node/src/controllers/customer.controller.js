const customerService = require("../services/customer.service");

// Fonction pour l'inscription d'un client
async function signUp(req, res) {
  try {
    const result = await customerService.signUpCustomer(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error during customer signup:", error);
    res.status(500).json({ error: "An error occurred during customer signup" });
  }
}

module.exports = {
  signUp,
};

const customerService = require("../services/customer.service");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const token = await customerService.loginCustomer(email, password);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during customer login:", error);
    res.status(500).json({ error: "An error occurred during customer login" });
  }
}

module.exports = {
  login,
};

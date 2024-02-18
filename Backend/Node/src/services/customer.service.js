const bcrypt = require("bcryptjs");
const Customer = require("../models/customer.model");

// Fonction pour l'inscription d'un client
async function signUpCustomer(customerData) {
  try {
    // Vérifier si le client existe déjà
    const existingCustomer = await Customer.findOne({
      email: customerData.email,
    });
    if (existingCustomer) {
      throw new Error("Customer with this email already exists");
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(customerData.password, 10);

    // Créer un nouveau client
    const newCustomer = new Customer({
      nom: customerData.nom,
      prenom: customerData.prenom,
      email: customerData.email,
      password: hashedPassword,
    });

    // Sauvegarder le nouveau client dans la base de données
    await newCustomer.save();

    return { message: "Customer created successfully" };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  signUpCustomer, // Export de la fonction signUpCustomer
};

async function loginCustomer(email, password) {
  //if mail exists
  const customer = await Customer.findOne({ email });
  if (!customer) {
    //if tsy aoo
    throw new Error("Customer not found");
  }
  ///comparer ny mdp roa
  const isPasswordMatch = await bcrypt.compare(password, customer.password);
  if (!isPasswordMatch) {
    ///si diso
    throw new Error("Incorrect password");
  }

  // Generena ny token eto
  const token = generateToken(customer); // Implement your token generation logic here
  return token;
}

function generateToken(customer) {
  const secretKey = "piopio"; // Remplacez ceci par votre propre clé secrète
  const payload = { customerId: customer._id };

  const token = jwt.sign(payload, secretKey);

  return token;
}
module.exports = {
  loginCustomer,
};

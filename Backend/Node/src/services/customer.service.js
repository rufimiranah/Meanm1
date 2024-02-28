const bcrypt = require("bcryptjs");
const Customer = require("../models/customer.model");
const jwt = require("jsonwebtoken");

async function signUpCustomer(customerData) {
  try {
    // Vérifier si le mot de passe est défini et est une chaîne de caractères
    if (!customerData.password || typeof customerData.password !== "string") {
      throw new Error("Password is required and must be a string");
    }

    console.log("Customer password before hashing:", customerData.password);

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(customerData.password, 10);

    console.log("Hashed password:", hashedPassword);

    // Créer un nouveau client
    const newCustomer = new Customer({
      nom: customerData.nom,
      prenom: customerData.prenom,
      email: customerData.email,
      password: hashedPassword,
    });

    // Sauvegarder le nouveau client dans la base de données
    await newCustomer.save();

    console.log("Customer created successfully");

    return { message: "Customer created successfully" };
  } catch (error) {
    throw error;
  }
}

async function loginCustomer(loginData) {
  try {
    // Vérifiez si l'email et le mot de passe sont définis
    if (
      !loginData.email ||
      typeof loginData.email !== "string" ||
      !loginData.password ||
      typeof loginData.password !== "string"
    ) {
      throw new Error("Email and password are required and must be strings");
    }

    // Vérifiez si l'utilisateur existe
    const customer = await Customer.findOne({ email: loginData.email });
    if (!customer) {
      throw new Error("No user found with this email");
    }

    // Vérifiez le mot de passe
    const isMatch = await bcrypt.compare(loginData.password, customer.password);
    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    // Créez un token JWT
    const token = jwt.sign({ id: customer._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    console.log("User logged in successfully");
    // Decode the token to extract user ID
    const decodedToken = jwt.verify(token, "your-secret-key");
    const userId = decodedToken.id;

    return { message: "User logged in successfully", token, userId };
  } catch (error) {
    throw error;
  }
}
async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.find();
    console.log(customers);
    res.json(customers); // Envoyez les clients comme réponse
  } catch (error) {
    console.error("Erreur lors de la récupération des clients:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des clients" });
  }
}
async function getUserByEmail(email) {
  try {
    const user = await Customer.findOne({ email: email });
    if (!user) {
      console.log("Aucun utilisateur trouvé avec cet email");
    } else {
      console.log(user);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
  }
}

// Utilisez la fonction pour récupérer un utilisateur
//getUserByEmail("mimiranay56@gmail.com");
/*loginCustomer({
  email: "mimiranay56@gmail.com",
  password: "Azerty", // Remplacez par le mot de passe réel
});*/
// Utilisez la fonction pour afficher tous les clients

module.exports = {
  signUpCustomer,
  loginCustomer,
  getAllCustomers,
  getUserByEmail,
};

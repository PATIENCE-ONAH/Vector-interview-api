const { signUpService, loginService } = require("./authService");

const signUpController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const token = await signUpService(fullName, email, password);
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = { signUpController, loginController };
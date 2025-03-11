const bcrypt = require("bcryptjs");
const AuthModel = require("./authModel");
const generateToken = require("../../utils/SignJwt");

/**
 * User sign up
 */
const signUpService = async (fullName,email, password) => {
  // Check if user exists
  let user = await AuthModel.findOne({ email });
  if (user) throw new Error("User already exists");

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  user = new AuthModel({fullName,email, password: hashedPassword });
  await user.save();

  // Return token
  return generateToken(user._id);
};

/**
 * User login
 */
const loginService = async (email, password) => {
  // Check if user exists
  let user = await AuthModel.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  // Return token
  return generateToken(user._id);
};

module.exports = { signUpService, loginService };


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Utility function to check if a user exists
const checkUserExists = async (email) => {
  return await User.findOne({ where: { email } });
};

// Utility function to hash the password
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

// Utility function to create a new user
const createUser = async (name, email, hashedPassword) => {
  return await User.create({
    name,
    email,
    password: hashedPassword,
  });
};

// Utility function to generate a JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await checkUserExists(email);

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await createUser(name, email, hashedPassword);
    const token = generateToken(newUser);

    res.status(201).json({
      message: "User registered successfully!",
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "An error occurred during sign-up" });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await checkUserExists(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToken(user);

    res.status(200).json({
      token,
      userId: user.id,
      message: "Login successful!",
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
};

export { registerUser, loginUser };
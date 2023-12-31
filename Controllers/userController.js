const users = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
 try {
  const findUser = await users.findOne({ email: req.body.email });
  // if user is exist
  if (findUser) {
   return res.status(400).json({ message: "Email is alerady exisits" });
  }
  // password must confirm
  if (req.body.password !== req.body.confirmPassword) {
   return res.status(400).json({ message: "Password is not matched" });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  req.body.password = hashedPassword;

  //save
  await users.create(req.body);
  res.status(200).json({ message: "User is created" });
 } catch (error) {
  return res.status(400).json({ error });
 }
};

exports.login = async (req, res) => {
 try {
  const { email, password } = req.body;
  const findUser = await users.findOne({ email });
  // if email is exists
  if (!findUser) {
   return res.status(400).json({ message: "Email is'nt vaild" });
  }
  // if password matches
  const decryptedPassword = await bcrypt.compare(password, findUser.password);
  if (decryptedPassword == false) {
   return res.status(400).json({ message: "Incorrect password" });
  }
  // Login successfuly
  res.status(200).json({ message: "Successfully Login" });
 } catch (error) {
  res.status(400).json({ error });
 }
};

exports.get = async (req, res) => {
 try {
  const findUser = await users.find({});
  res.status(200).json({ message: findUser });
 } catch (error) {
  res.status(400).json({ error });
 }
};

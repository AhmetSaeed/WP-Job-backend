const posts = require("../Models/postModel");

exports.createPost = async (req, res) => {
 try {
  await posts.create(req.body);
  res.status(200).json({ message: "post is created successfully" });
 } catch (error) {
  res.status(200).json({ error });
 }
};
exports.allPost = async (req, res) => {
 const findPost = await posts.find({});
 res.status(200).json({ message: findPost });
};

exports.getOnePost = async (req, res) => {
 const { id } = req.params;
 const findPost = await posts.findById(id).populate("user");
 res.status(200).json({ message: findPost });
};

exports.updatePost = (req, res) => {};

exports.deletePost = (req, res) => {};

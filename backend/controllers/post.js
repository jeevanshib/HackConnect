const Post = require( "../models/Post" )

exports.createPost = async(req, res) => {
  // console.log(req.body);
  try {
    const post = await new Post(req.body).save();
    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    
    // const posts = await Post.find().populate("user", "first_name last_name picture username gender").sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
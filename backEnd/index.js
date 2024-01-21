import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT;
import "dotenv/config";

app.use(express.json());
app.use(cors());
const blogSchema = new mongoose.Schema({
  image: String,
  header: String,
  text: String,
});

const blogModel = mongoose.model("myBlogs", blogSchema);

app.get("/", async (req, res) => {
  const blog = await blogModel.find({});

  res.send(blog);
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findById(id);
  res.send(blog);
});

app.post("/", async (req, res) => {
  const { image, header, text } = req.body;
  const newBlog = new blogModel({ image, header, text });
  await newBlog.save();
  res.send("Got a POST request");
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.findByIdAndDelete(id);
  res.send("item deleted");
});
mongoose.connect(process.env.SECRET_KEY).then(console.log("Connected"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

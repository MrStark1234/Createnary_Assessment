const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
const PORT = process.env.port || 80;
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to the world of coding");
});

mongoose
  .connect(process.env.MongoUrl, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
// -----------------------Carousel Data Schema--------------------
const dataSchema = new mongoose.Schema({
  title: String,
  description: String,
});
const Data = mongoose.model("Data", dataSchema);

app.post("/data", async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = new Data({ title, description });
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// -----------------------FAQ Data Schema--------------------
const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});
const Faq = mongoose.model("Faq", faqSchema);

app.post("/faq", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new Faq({ question, answer });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/faq", async (req, res) => {
  try {
    const faq = await Faq.find();
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);

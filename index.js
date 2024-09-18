import express from "express";
import fs from "fs";
import path from "path"; // <-- Add this line to import the 'path' module
import { fileURLToPath } from 'url'; // Needed for __dirname in ES modules

// For ES modules, use this to get the equivalent of __dirname:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const carouselImages = fs.readdirSync(path.join(__dirname, "public/assets/carousel"))
    .filter(file => file.endsWith(".jpg") || file.endsWith(".png")); // Filter for image files
    const carousel1Images = fs.readdirSync(path.join(__dirname, "public/assets/feature/featureCarousel1"))
    .filter(file => file.endsWith(".jpg") || file.endsWith(".png"));
  const carousel2Images = fs.readdirSync(path.join(__dirname, "public/assets/feature/featureCarousel2"))
    .filter(file => file.endsWith(".jpg") || file.endsWith(".png"));
  const carousel3Images = fs.readdirSync(path.join(__dirname, "public/assets/feature/featureCarousel3"))
    .filter(file => file.endsWith(".jpg") || file.endsWith(".png"));
  const carousel4Images = fs.readdirSync(path.join(__dirname, "public/assets/feature/featureCarousel4"))
    .filter(file => file.endsWith(".jpg") || file.endsWith(".png"));

  res.render("index.ejs", { 
    year: new Date().getFullYear(),
    carouselImages,
    carousel1Images,
    carousel2Images,
    carousel3Images,
    carousel4Images
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
})

app.get("/about", (req, res) => {
  res.render("about.ejs");
})

app.get("/merch", (req, res) => {
  res.render("merch.ejs");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

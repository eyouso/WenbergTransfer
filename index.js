import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { year: new Date().getFullYear() });
  //res.render("index.ejs");
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
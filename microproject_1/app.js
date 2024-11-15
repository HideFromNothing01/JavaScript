const express = require("express");
const data = require("./data/cards.json");

const app = express();
const port = 3000;

const path = require("path");

//console.log(__dirname);

//http://localhost:3000/site
//formula for use(): use(URL, express.static())
app.use("/site", express.static(path.join(__dirname, "public")));

app.get("/cards", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

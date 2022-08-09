const express = require("express");
const app = express();
const axios = require("axios");
const gotJson = require("../got.json");

app.get("/json", (req, res) => {
  res.json(gotJson);
});

app.get("/url", async (req, res) => {
  const response = await axios.get("https://thronesapi.com/api/v2/Characters");
  console.log(response.data);
  res.send(response.data);
});
module.exports = app;

const express = require("express");
const app = express();
const axios = require("axios");

app.get("/json", async (req, res) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pkemon/?limit=151/"
  );
  res.send(response.data);
});

module.exports = app;

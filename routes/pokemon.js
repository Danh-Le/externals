const express = require("express");
const app = express();
const axios = require("axios");

app.get("/api", async (req, res) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pkemon/?limit=151/"
  );
  res.send(response.data);
});

app.get("/api/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    );
    res.send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

module.exports = app;

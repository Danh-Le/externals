const express = require("express");
const app = express();
const port = 5000;
const pokemon = require("./routes.pokemon");
const got = require("./routes/got");

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.use("/gameOfThrones", got);
app.use("/pokemon", pokemon);

app.listen(port, () => {
  console.log("Server started on port: " + port);
});

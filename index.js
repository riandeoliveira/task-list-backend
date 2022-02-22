const express = require("express");
const cors = require("cors");
// const path = require("path");
const routes = require("./routes/routes.js");
require("./database.js");

const port = process.env.PORT || 5000;

console.log(port);

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

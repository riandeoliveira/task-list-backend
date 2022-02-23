const express = require("express");
const cors = require("cors");

const routes = require("./routes/routes.js");
require("./database.js");

const port = process.env.PORT || 5000;

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

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

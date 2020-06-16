const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./api");
const app = express();
app.use(cors());
app.use(morgan("dev"));


app.use(bodyParser.urlencoded({ extended: false })), app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.use("/api", routes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.htm"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on  port ${PORT} `);
});

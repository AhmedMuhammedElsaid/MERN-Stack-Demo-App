const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const routes = require("./api");

// Create our server 
const app = express();
app.use(cors());
app.use(morgan("dev"));

// set default configurations to the server 
app.use(bodyParser.urlencoded({ extended: false })), app.use(bodyParser.json());

// setup the port to work as well while in the local environment and heroku also
const PORT = process.env.PORT || 8080;

// directs our request to the route 
app.use("/api", routes);

// Production Configurations 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.htm"));
  });
}

// listens to the port to fire our server
app.listen(PORT, () => {
  console.log(`Server is running on  port ${PORT} `);
});

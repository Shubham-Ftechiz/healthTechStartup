const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dashbord = require("./routes/dashboard");

const app = express();
// defining an array to work as the database (temporary solution)

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Use express
app.use(express.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests

// defining an endpoint to return all ads
app.get("/", (req, res) => {
  res.send("Testing APIs");
});

// routes
dashbord(app);

const PORT = process.env.PORT | 8000;

// starting the server
app.listen(PORT, () => {
  console.log("listening on port 8000");
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("./models");
db.sequelize.sync();

// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.send("Home page"));

// @URL - /blogs
app.use("/blogs", require("./routes/blogs"));

// Starting the server
const PORT = 5000;
app.listen(PORT, () => console.log("Server started on PORT " + PORT));

const express = require("express");
const models = require("./models");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
const cors = require("cors");

const app = express();

// Replace with your mongoLab URI
const MONGO_URI = "";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", (error) => console.log("Error connecting to MongoLab:", error));
app.use(cors());
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;

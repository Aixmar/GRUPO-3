//-REQUIRE_EXPRESS------------------------------------//
const express = require("express");
//-REQUIRE_MORGAN_DEPENDENCY--------------------------//
const morgan = require("morgan");
//-REQUIRE_MIDDLEWARES--------------------------------//
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//-ROUTES_REQUIRE-------------------------------------//
const routes = require("./routes/index.js");

//-I_DONT_KNOW_THIS-----------------------------------//
require("./db.js"); // i dont know what is this.

//----------------------------------------------------//
const server = express();

server.name = "API";

//-MIDDLEWARES----------------------------------------//
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
//server.use(express.json());

//-MORGAN_DEPENDENCY----------------------------------//
server.use(morgan("dev"));

//-ACCESS_TO_FRONT_END-----------------------//
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//-ROUTES_RESPONSABILITY------------------------------//
server.use("/", routes);

//-ERROR_CATCHING_ENDWARE-----------------------------//
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

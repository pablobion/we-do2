const express = require("express");
const router = express.Router();
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

const userControll = require("../controllers/userControll");

const { AuthenticationError } = require("apollo-server-express"); //dont think i want this here

//what am i doing in here? what model am i focusing on?
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const login = require("./login");
const getSingleUser = require("./getSingleUser");
const removeBook = require("./removeBook");
const saveBook = require("./saveBook");
const createUser = require("./createUser");

const resolvers = {
  Query: {
    me: getSingleUser,
  },
  Mutation: {
    createUser,
    login,
    saveBook,
    removeBook,
  },
};

module.exports = resolvers;

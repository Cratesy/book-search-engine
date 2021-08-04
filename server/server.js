const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(
      `🌍 Now listening on http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});

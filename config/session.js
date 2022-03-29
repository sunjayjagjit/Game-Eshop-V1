const expressSession = require("express-session");
const mongoDbStore = require("connect-mongodb-session");

function createSessionStore() {
  const mongoDBStore = mongoDbStore(expressSession);

  const store = new mongoDBStore({
    uri: "mongodb://localhost:27017",
    databaseName: "online-eshop",
    collection: "sessions",
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: "super-secret-login",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 1000,
    },
  };
}

module.exports = createSessionConfig;

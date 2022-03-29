const mongodb = require("mongodb");

//create mongo client
const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  //call the connection static server
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("online-eshop");
}

function getDb() {
  if (!database) {
    throw new Error("you must have a connection to database first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};

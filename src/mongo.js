const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://ddd120:${process.env.MONGO_PASSWORD}@cluster0.nfseu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;

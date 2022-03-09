var express = require('express');
const {MongoClient} = require("mongodb");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const MongoClient = require("mongodb").MongoClient;
  const mongoClient = new MongoClient("mongodb://mongo:27017");

  mongoClient.connect(((error, client) => {
    if(error) {
      console.error(error);
      return;
    }
    console.log('Connected')
    client.close();
  }))

  res.render('index', { title: 'Express' });
});

module.exports = router;

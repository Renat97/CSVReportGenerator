const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

const mysql = require('mysql');

const model = require('./database/models.js');

var urlEncodedParser = bodyParser.urlencoded({ extended: false});

app.use(urlEncodedParser);

app.use(express.static('public'));

app.post('/formTwo', (req, res, next) => {
  console.log(req.body)
  //res.sendStatus(200);
  var name = req.body['name'];
  var email = req.body['email'];
  var pass = req.body['password'];

  console.log('name',name);

  model.sendGroceries(req.body,(err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send();
    }

  })
});

app.listen(port, () => {
  console.log('server is running');
})




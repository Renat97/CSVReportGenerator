const db = require('./index.js');

module.exports = {
  sendGroceries: function(grocery, callback) {
    db.query(`insert into checkoutList (name, email, password) values("${grocery.name}","${grocery.email}", "${grocery.password}")`, (err, results, fields) => {
      if(err) {
        callback(err);
      } else {
        console.log('no error', results);
        callback(null, results);
      }
    })
  }
}
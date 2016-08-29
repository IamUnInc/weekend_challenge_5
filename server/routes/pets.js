
var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.get('/', function (req, res){
	pg.connect(connectionString, function (err, client, done){
		if (err) {
			res.sendStatus(500);
		}
		client.query('SELECT pet_id, pet_name,' +
    ' pet_imageurl, pet_description FROM favoritepets'
    , function (err, results){
			done();
			if(err) {
				res.sendStatus(500);
			}
			res.send(results.rows);
		});
	});

});

router.post('/', function (req, res){
  var pet = req.body;
  console.log(pet);
    console.log(pet.id.$t);
      console.log(pet.media.photos.photo[2].$t);
      console.log(pet.description.$t);
  var descript = pet.description.$t;
  var oneHund = descript.substring(0,100);
	pg.connect(connectionString, function (err, client, done){
		if (err) {
			res.sendStatus(500);
		}
    client.query("INSERT INTO favoritepets (pet_name, pet_id, pet_imageurl, pet_description) VALUES ($1, $2, $3, $4)",
      [pet.name.$t, pet.id.$t, pet.media.photos.photo[2].$t, oneHund],
      function(err, result) {
        done();

        if(err) {
          console.log("query error: ", err);
          res.sendStatus(500);
        }
  //       // created!
        res.sendStatus(201);
    });
  });
	});




module.exports = router;

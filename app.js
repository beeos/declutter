var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.json());

var mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    dbOptions = {
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'declutter',
    };

app.use(myConnection(mysql, dbOptions, 'single'));

app.get('/endpoints/get_all_things.jsonp', function(req, res){

    req.getConnection(function(err, connection) {
          if (err) return next(err);

          connection.query('SELECT * FROM things', [], function(err, results) {
            if (err) return next(err);

              res.send(
                "angular.callbacks._0(\n"
                + JSON.stringify( results )
                + "\n);\n"
              );

          });
    });
});

app.post('/endpoints/add_thing', function(req, res){

    req.getConnection(function(err, connection) {
        if (err) console.log(err);

        connection.query(
            'INSERT INTO things (`user_id`, `added_dt`, `name`, `description`) values (?, now(), ?, ?)',
            [1, req.body.name, req.body.description],
            function(err, results) {
                if (err) console.log(err);
            }
        );
    });

});

var server = app.listen(9000, function() {
    console.log('Listening on port %d', server.address().port);
});

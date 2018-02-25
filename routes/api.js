var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '147258',
    database : 'AnguSales'
});

connection.connect();

/* GET home page. */
router.get('/getCustomers', function(req, res, next) {
    connection.query('SELECT * FROM customers INNER JOIN companies ON companies.id  = customers.Company; ', function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// connection.end();

// router.get('/getCustomers', function(req, res, next) {
//     res.send('hello!');
// })

module.exports = router;
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
router.get('/getCustomers', function(req, res) {
    connection.query('SELECT customers.id as id, customers.FirstName as name, customers.LastName as lastName, customers.Email as email, customers.Phone as phone, companies.Name as company, companies.Country as country   FROM customers LEFT JOIN companies ON companies.id  = customers.Company; ', function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

/* GET companies. */
router.get('/getCompanies', function(req, res) {
    connection.query('SELECT companies.id as id, companies.Name as name, companies.Adress as adress, companies.Country as country FROM companies ', function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

/* POST new customer. */
router.post('/addCustomer', function(req, res) {
    var newCustomer = req.body.customer;
    console.log(newCustomer);

    connection.query('INSERT INTO customers SET ?', newCustomer, function (err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });
});

module.exports = router;
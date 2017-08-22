const express = require('express');
const app = express();
const db = require('./db.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/new_employee', function (req, res) {
    const ename = req.body.forename;
    console.log('Adding new employee.\n' + req.body);
    db.addEmployee(req.body, function (rows){
         res.send(rows);
    }); 
});

app.post('/new_sales_employee', function (req, res) {
    console.log('Adding new sales employee.\n' + req.body);
    db.addSalesEmployee(req.body, function (rows){
        res.send(rows);
    });
});

app.post('/employees/dept', function (req, res) {
    console.log('Getting list of employees by dept.\n' + req.body);
    db.getEmployeesInDepartment(req.body, function (rows){
        res.send(rows);
    });
});

app.listen(8002, function () {
    console.log('Listening on 192.168.1.60:8002.');
});

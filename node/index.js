const express = require('express');
const app = express();
const db = require('./db.js');

app.post('/new_employee', function (req, res) {
    console.log('Adding new employee.');
    // db.addEmployee(req.body, function (rows){
    //     res.send(rows);
    // });
    res.send('worked new emp');
});

app.post('/new_sales_employee', function (req, res) {
    console.log('Adding new sales employee.');
    // db.getEmployeesInDepartment(req.body, function (rows){
    //     res.send(rows);
    // });
    res.send('worked new sales');
});

app.get('/employees/dept', function (req, res) {
    console.log('Getting list of employees by dept.');
    // db.getEmployeesInDepartment(req.body, function (rows){
    //     res.send(rows);
    // });
    res.send('worked');
});

app.listen(8002, function () {
    console.log('Listening on 192.168.1.60:8002.');
});

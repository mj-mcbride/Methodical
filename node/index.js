const express = require('express');
const app = express();
const db = require('./db.js');

app.post('/new_employee', function (req, res) {
    console.log('Adding new employee.');
    db.getEmployeesInDepartment(req.body, function (rows){
        res.send(rows);
    });
});

app.get('/employees/dept', function (req, res) {
    console.log('Getting list of employees by dept.');
    db.getEmployeesInDepartment(req.body.deptName, function (rows){
        res.send(rows);
    });
});

app.listen(8002, function () {
    console.log('Listening on 192.168.1.60:8002.');
});

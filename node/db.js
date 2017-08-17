const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'methodical'
});

db.connect( function (err) {
    if(err) throw err;
    console.log("Connected to MySQL database at 192.168.1.61.");
});

exports.getEmployeesInDepartment = function (deptName, callback){
    db.query(
        "SELECT * FROM US2 WHERE `Department Name` = ?;",
        [deptName],
        function (err, rows) {
            if (err) throw err;
            callback(rows);
        });
};

exports.addEmployee = function (emp, callback){
    db.query(
        "INSERT INTO Employee (forename, surname, street_number, street_name, city, NIN, bank_account, salary) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
        [emp.forename, emp.surname, emp.street_number, emp.street_name, emp.city, emp.NIN, emp.bank_account, emp.salary],
        function (err, rows) {
            if(err) throw err;
            callback ('success');
        });
};
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '192.168.1.171',
    user: 'user',
    password: 'thursday',
    database: 'methodical'
});

db.connect( function (err) {
    if(err) throw err;
    console.log("Connected to MySQL database at 192.168.1.61.");
});

exports.getEmployeesInDepartment = function (callback){
    db.query(
        // "SELECT * FROM US2 WHERE `Department Name` = ?;",
        "SELECT * FROM Employee",
        [],
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

exports.addSalesEmployee = function (emp, callback){
    db.query(
        "INSERT INTO Employee (forename, surname, street_number, street_name, city, NIN, bank_account, salary) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
        [emp.forename, emp.surname, emp.street_number, emp.street_name, emp.city, emp.NIN, emp.bank_account, emp.salary],
        function (err, rows) {
            if(err) throw err;
            callback ('success');
        });

    db.query(
        "INSERT INTO Sales_Employee (sales_employee_id) VALUES (SELECT employee_id FROM Employee WHERE NIN = ?), ?);",
        [emp.NIN, emp.commission],
        function (err, rows) {
            if(err) throw err;
            callback ('success');
        });
};
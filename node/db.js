const mysql = require('mysql');

const db = mysql.createConnection({
    host: '192.168.1.61',
    user: 'root',
    password: 'uU6jfSary0*-',
    database: 'methodical'
});

db.connect( function (err) {
    if(err) throw err;
    console.log("Connected to MySQL database at 192.168.1.61.");
});

exports.getEmployeesInDepartment = function (deptName, callback){
    db.query(
        "SELECT * FROM US2 WHERE `Department Name` = ?",
        [deptName],
        function (err, rows) {
            if (err) throw err;
            callback(rows);
        });
}
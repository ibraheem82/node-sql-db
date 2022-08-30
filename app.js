const express = require('express');
const mysql = require('mysql');


// * Connection created
const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'node_db_sql'
})

// * Connect
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log(`Mysql connected`);
});
const app = express();

//* Will created the database.
app.get('/createdb', (req, res) => {
    let sql  = 'CREATE DATABASE node_db_sql';

    // to RUN IT
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('<h1>Database created........</h1>');

    });
});

//* Creating table
app.get('/createdatastable', (req, res) => {
    let sql = 'CREATE TABLE datas(id int AUTO_INCREMENT, tltle VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Datas table created........');
    });

})

app.listen('8000', () => {
    console.log(`Server started on port 8000`);
});
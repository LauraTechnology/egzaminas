const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "egzaminas",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Read Node
app.get('/kolt_scooters', (req, res) => {
    const sql = `
        SELECT *
        FROM kolt_scooters
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Create Node
app.post('/kolt_scooters', (req, res) => {
    const sql = `
        INSERT INTO kolt_scooters
        (id, product, quantity, price)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.id,
        req.body.product,
        req.body.quantity,
        req.body.price
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Update Node
app.put('/kolt_scooters/:id', (req, res) => {
    const sql = `
        UPDATE kolt_scooters
        SET id = ?, product = ?, quantity = ?, price = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.id,
        req.body.product,
        req.body.quantity,
        req.body.price,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Delete Node
app.delete('/kolt_scooters/:id', (req, res) => {
    const sql = `
        DELETE FROM kolt_scooters
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


//Filter Node
app.get('/kolt_scooters-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM kolt_scooters
        WHERE id = ?
    `;
    
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})



//Search Node
app.get('/kolt_scooters-quantity', (req, res) => {
    const sql = `
        SELECT *
        FROM lentele
        WHERE quantity LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
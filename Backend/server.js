const express = require('express')
const mysql = require('mysql')
const bodyparser = require('body-parser')
const app = express();

var cors = require('cors')
app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const port = 4000
const host = "localhost"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "localhost",
    database: "libreria"
})

app.listen(port, host, () => {
    console.log(`Sono connesso all'indirizzo http://${host}:${port}`)
})




app.post("/login", (req, res) => {
    let email = req.body.email;
    let passw = req.body.password;

    connection.query(`SELECT * FROM amministratori WHERE eml = '${email}' AND pwd = '${passw}'`, (errore, risultato, campi)=>{

        if(!errore && risultato.length == 1){
            res.json({
                status: "success",
                data: risultato[0]
            })
        }
        else
            res.json({
                status: "error",
            
            })
    })
})


//--------------------- VISUALIZZA LISTA LIBRI ----------------------------------
app.get("/libreria/lista", (req, res) => {
    connection.query("SELECT * FROM lista_libri", (errore, risultato, campi) => {
        if (!errore)
            res.json(risultato);
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })
})

//--------------------- VISUALIZZA LIBRO TRAMITE ISBN ---------------------------
app.get("/libreria/libro/:isbn", (req, res) => {
    connection.query(`SELECT * FROM lista_libri WHERE isbn = ${req.params.isbn} `, (errore, risultato, campi) => {
        if (!errore)
            res.json(risultato);
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })
})

//------------------------------ AGGIUNTA LIBRO ---------------------------------
app.post("/libreria/addLibro", (req, res) => {
    connection.query(`INSERT INTO lista_libri (autore, titolo, descrizione) VALUES ("${req.body.autore}", "${req.body.titolo}", "${req.body.descrizione}" )`, (errore, risultato, campi) => {
        if (!errore)
            res.json("libro aggiunto con successo");
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })

})

//--------------------- MODIFICA LIBRO TRAMITE ISBN -----------------------------
app.put("/libreria/modifica/:isbn", (req, res) => {
    connection.query(`UPDATE lista_libri SET autore = "${req.body.autore}", titolo = "${req.body.titolo}", descrizione = "${req.body.descrizione}" WHERE isbn = ${req.params.isbn} `, (errore, risultato, campi) => {
        if (!errore)
            res.json("success");
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })
})

//--------------------- ELIMINA LIBRO TRAMITE ISBN -----------------------------
app.delete("/libreria/elimina/:isbn", (req, res) => {
    connection.query(`DELETE FROM lista_libri WHERE isbn = ${req.params.isbn}`, (errore, risultato, campi) => {
        if (!errore)
            res.json("success");
        else
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
    })
})
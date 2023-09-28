import express from "express";
import db from "../db/db_config.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Hello World!");
});

router.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    //CHECK IF USERNAME EXISTS
    const sqlCheck = "SELECT * FROM felhasznalok WHERE username = ?";
    db.query(sqlCheck, [username], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send({ message: "Username already exists!" });
        }
    }
    );

    const sqlInsert = "INSERT INTO felhasznalok (username, email, passwd) VALUES (?, ?, ?)";
    db.query(sqlInsert, [username, email, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send(result);
        }
    });
})

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sqlSelect = "SELECT * FROM felhasznalok WHERE username = ? AND passwd = ?";
    db.query(sqlSelect, [username, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "Wrong username/password combination!" });
        }
    });
});

export default router;
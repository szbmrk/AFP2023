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
    let userExists = false;
    db.query(sqlCheck, [username], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            userExists = true;
            res.send({ message: "Username already exists!" });
        }
    }
    );

    if (userExists) return;
    const sqlInsert = "INSERT INTO felhasznalok (username, email, passwd) VALUES (?, ?, ?)";
    db.query(sqlInsert, [username, email, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ message: "User registered!" });
        }
    });
})

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log('username' + username + 'password' + password)
    const sqlSelect = "SELECT * FROM felhasznalok WHERE username = ? AND passwd = ?";
    db.query(sqlSelect, [username, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send({ result: result, message: "User logged in!" });
        } else {
            res.send({ message: "Wrong username/password combination!" });
        }
    });
});

router.get("/inventory/:userid", (req, res) => {
    const userId = req.params.userid;
    const sql = "SELECT * FROM inventory WHERE username = ? JOIN skinek ON inventory.skinId = skinek.skinId JOIN felhasznalok ON inventory.userId = felhasznalok.userId";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "Inventory loaded!" });
        }
    });
});

router.get("/skins", (req, res) => {
    const sql = "SELECT * FROM skinek";
    db.query(sql, (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "Skins loaded!" });
        }
    });
});

router.get("/offers/:userId", (req, res) => {
    const userId = req.params.userId;
    const sql = "SELECT * FROM offers WHERE toUserId = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "Offers loaded!" });
        }
    });
})

router.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    const sql = "SELECT * FROM felhasznalok WHERE userId = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "User loaded!" });
        }
    });
})

router.get("/skins/:skinId", (req, res) => {
    const skinId = req.params.skinId;
    const sql = "SELECT * FROM skinek WHERE skinId = ?";
    db.query(sql, [skinId], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "Skin loaded!" });
        }
    });
})

export default router;
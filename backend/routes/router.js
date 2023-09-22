import express from "express";
import db from "../db/db_config.js";

const router = express.Router();

router.get('/test', (req, res) => {
    db.query('SELECT * FROM felhasznalok', (err, rows) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        res.send(rows);
    });
});

export default router;
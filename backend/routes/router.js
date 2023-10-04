import express from "express";
import db from "../db/db_config.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Hello World!");
});

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    // CHECK IF USERNAME EXISTS
    const sqlCheck = "SELECT * FROM felhasznalok WHERE USERNAME = ?";

    try {
        const userExists = await new Promise((resolve, reject) => {
            db.query(sqlCheck, [username], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.length > 0);
                }
            });
        });

        if (userExists) {
            res.send({ message: "USERNAME already exists!" });
            return;
        }

        const sqlInsert = "INSERT INTO felhasznalok (USERNAME, email, passwd) VALUES (?, ?, ?)";
        const insertResult = await new Promise((resolve, reject) => {
            db.query(sqlInsert, [username, email, password], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        // INSERT RANDOM SKINS FOR EACH RITKASAG TO THE INVENTORY TABLE
        const sqlSelect = "SELECT * FROM ritkasag";
        const ritkasagResult = await new Promise((resolve, reject) => {
            db.query(sqlSelect, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const sqlInsertInventory = "INSERT INTO inventory (userId, SKINID) VALUES (?, ?)";
        let SKINIDs = [];

        for (let i = 0; i < ritkasagResult.length; i++) {
            const sqlSelectSkin = "SELECT * FROM skinek WHERE RITKASAGID = ? ORDER BY RAND() LIMIT 1";
            const skinResult = await new Promise((resolve, reject) => {
                db.query(sqlSelectSkin, [ritkasagResult[i].RITKASAGID], (err, result2) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result2[0].SKINID);
                    }
                });
            });

            SKINIDs.push(skinResult);

            if (SKINIDs.length === ritkasagResult.length) {
                for (let j = 0; j < SKINIDs.length; j++) {
                    const result3 = await new Promise((resolve, reject) => {
                        db.query(sqlInsertInventory, [insertResult.insertId, SKINIDs[j]], (err, result3) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result3);
                            }
                        });
                    });
                }
            }
        }

        res.send({ message: "User registered!" });
    } catch (err) {
        res.send({ err: err });
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sqlSelect = "SELECT * FROM felhasznalok WHERE USERNAME = ? AND PASSWD = ?";
    db.query(sqlSelect, [username, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send({ result: result, message: "User logged in!" });
        } else {
            res.send({ message: "Wrong USERNAME/password combination!" });
        }
    });
});

router.get("/inventory/:userid", (req, res) => {
    const userId = req.params.userid;
    const sql = "SELECT * FROM skinek INNER JOIN fegyver ON skinek.FEGYVERID = fegyver.FEGYVERID INNER JOIN ritkasag ON skinek.RITKASAGID = ritkasag.RITKASAGID INNER JOIN inventory ON skinek.SKINID = inventory.SKINID and inventory.userId = ?";
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
    const sql = "SELECT * FROM skinek INNER JOIN fegyver ON skinek.FEGYVERID = fegyver.FEGYVERID INNER JOIN ritkasag ON skinek.RITKASAGID = ritkasag.RITKASAGID";
    db.query(sql, (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "Skins loaded!" });
        }
    });
});

router.get("/offers/:userId", async (req, res) => {
    const userId = req.params.userId;
    const sql = "SELECT * FROM offerek INNER JOIN felhasznalok ON offerek.fromUserId = felhasznalok.userId WHERE toUserId = ? and elfogadva = 0";

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(sql, [userId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        let mySkinPromises = [];
        let theirSkinPromises = [];

        for (let i = 0; i < result.length; i++) {
            mySkinPromises.push(getSkin(result[i].FROMSKINID));
            theirSkinPromises.push(getSkin(result[i].TOSKINID));
        }

        const mySkins = await Promise.all(mySkinPromises);
        const theirSkins = await Promise.all(theirSkinPromises);

        for (let i = 0; i < result.length; i++) {
            result[i].mySkin = mySkins[i];
            result[i].theirSkin = theirSkins[i];
        }

        res.send({ result: result, message: "Offers loaded!" });
    } catch (err) {
        res.send({ err: err });
    }
});

function getSkin(SKINID) {
    const sql2 = "SELECT * FROM skinek INNER JOIN fegyver ON skinek.FEGYVERID = fegyver.FEGYVERID INNER JOIN ritkasag ON skinek.RITKASAGID = ritkasag.RITKASAGID WHERE SKINID = ?";
    return new Promise((resolve, reject) => {
        db.query(sql2, [SKINID], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

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

router.get("/users", (req, res) => {
    const sql = "SELECT * FROM felhasznalok";
    db.query(sql, (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "Users loaded!" });
        }
    });
});

router.get("/skins/:SKINID", (req, res) => {
    const SKINID = req.params.SKINID;
    const sql = "SELECT * FROM skinek WHERE SKINID = ?";
    db.query(sql, [SKINID], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ result: result, message: "Skin loaded!" });
        }
    });
})

router.post("/sendoffer/:fromUserId/:toUserId/:fromSKINID/:toSKINID", (req, res) => {
    const fromUserId = req.params.fromUserId;
    const toUserId = req.params.toUserId;
    const fromSKINID = req.params.fromSKINID;
    const toSKINID = req.params.toSKINID;
    const sql = "INSERT INTO offerek (fromUserId, toUserId, fromSKINID, toSKINID) VALUES (?, ?, ?, ?)";
    db.query(sql, [fromUserId, toUserId, fromSKINID, toSKINID], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ message: "Offer sent!" });
        }
    });
})

router.post("/acceptoffer/:offerId", async (req, res) => {
    const offerId = req.params.offerId;

    // Promise to get the offer details
    const getOfferDetails = new Promise((resolve, reject) => {
        const sql1 = "SELECT * FROM offerek WHERE offerId = ?";
        db.query(sql1, [offerId], (err, offerResult) => {
            if (err) {
                reject(err);
            } else {
                if (offerResult.length === 0) {
                    reject("Offer not found");
                } else {
                    const { FROMUSERID, FROMSKINID, TOUSERID, TOSKINID } = offerResult[0];
                    resolve({ FROMUSERID, FROMSKINID, TOUSERID, TOSKINID });
                }
            }
        });
    });

    try {
        const { FROMUSERID, FROMSKINID, TOUSERID, TOSKINID } = await getOfferDetails;

        // Promise to update the offer status
        const updateOfferStatus = new Promise((resolve, reject) => {
            const sql2 = "UPDATE offerek SET elfogadva = 1 WHERE offerId = ?";
            db.query(sql2, [offerId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const deleteCurrent1 = new Promise((resolve, reject) => {
            const sql3 = "DELETE FROM inventory WHERE userId = ? AND SKINID = ?";
            db.query(sql3, [FROMUSERID, FROMSKINID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const deleteCurrent2 = new Promise((resolve, reject) => {
            const sql4 = "DELETE FROM inventory WHERE userId = ? AND SKINID = ?";
            db.query(sql4, [TOUSERID, TOSKINID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const insertNew1 = new Promise((resolve, reject) => {
            const sql5 = "INSERT INTO inventory (userId, SKINID) VALUES (?, ?)";
            db.query(sql5, [TOUSERID, FROMSKINID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const insertNew2 = new Promise((resolve, reject) => {
            const sql6 = "INSERT INTO inventory (userId, SKINID) VALUES (?, ?)";
            db.query(sql6, [FROMUSERID, TOSKINID], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        await Promise.all([updateOfferStatus, deleteCurrent1, deleteCurrent2, insertNew1, insertNew2]);

        res.send({ message: "Offer accepted!" });
    } catch (err) {
        res.send({ err: err });
    }
});

router.delete("/declineoffer/:offerId", (req, res) => {
    const offerId = req.params.offerId;
    const sql = "DELETE FROM offerek WHERE offerId = ?";
    db.query(sql, [offerId], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result) {
            res.send({ message: "Offer declined!" });
        }
    });
})

export default router;
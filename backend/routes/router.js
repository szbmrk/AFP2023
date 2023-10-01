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
    const sql = "SELECT * FROM skinek INNER JOIN fegyver ON skinek.fegyverId = fegyver.fegyverId INNER JOIN ritkasag ON skinek.ritkasagId = ritkasag.ritkasagId INNER JOIN inventory ON skinek.skinId = inventory.skinId and inventory.userId = ?";
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
    const sql = "SELECT * FROM skinek INNER JOIN fegyver ON skinek.fegyverId = fegyver.fegyverId INNER JOIN ritkasag ON skinek.ritkasagId = ritkasag.ritkasagId";
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
            mySkinPromises.push(getSkin(result[i].fromSkinId));
            theirSkinPromises.push(getSkin(result[i].toSkinId));
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

function getSkin(skinId) {
    const sql2 = "SELECT * FROM skinek INNER JOIN fegyver ON skinek.fegyverId = fegyver.fegyverId INNER JOIN ritkasag ON skinek.ritkasagId = ritkasag.ritkasagId WHERE skinId = ?";
    return new Promise((resolve, reject) => {
        db.query(sql2, [skinId], (err, result) => {
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

router.post("sendoffer/:fromUserId/:toUserId/:fromSkinId/:toSkinId", (req, res) => {
    const fromUserId = req.params.fromUserId;
    const toUserId = req.params.toUserId;
    const fromSkinId = req.params.fromSkinId;
    const toSkinId = req.params.toSkinId;
    const sql = "INSERT INTO offerek (fromUserId, toUserId, fromSkinId, toSkinId) VALUES (?, ?, ?, ?)";
    db.query(sql, [fromUserId, toUserId, fromSkinId, toSkinId], (err, result) => {
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
                    const { fromUserId, fromSkinId, toUserId, toSkinId } = offerResult[0];
                    resolve({ fromUserId, fromSkinId, toUserId, toSkinId });
                }
            }
        });
    });

    try {
        const { fromUserId, fromSkinId, toUserId, toSkinId } = await getOfferDetails;

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
            const sql3 = "DELETE FROM inventory WHERE userId = ? AND skinId = ?";
            db.query(sql3, [fromUserId, fromSkinId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const deleteCurrent2 = new Promise((resolve, reject) => {
            const sql4 = "DELETE FROM inventory WHERE userId = ? AND skinId = ?";
            db.query(sql4, [toUserId, toSkinId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const insertNew1 = new Promise((resolve, reject) => {
            const sql5 = "INSERT INTO inventory (userId, skinId) VALUES (?, ?)";
            db.query(sql5, [toUserId, fromSkinId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const insertNew2 = new Promise((resolve, reject) => {
            const sql6 = "INSERT INTO inventory (userId, skinId) VALUES (?, ?)";
            db.query(sql6, [fromUserId, toSkinId], (err, result) => {
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
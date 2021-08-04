const db = require('../configs/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var salt = bcrypt.genSaltSync(10);

const addUser = (req, res) => {
    const { name, password } = req.body;

    bcrypt.hash(password, salt, function (err, hash) {
        const sql = `INSERT INTO users (name,password) VALUES ('${name}','${hash}');`;
        db.query(sql, (err, result) => {
            if (err) {
                console.error(err);
                res.status(400).json({ error: err });
            } else {
                res.status(200).json({ message: "added User", result });
            }
        });
    });
}


const getUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    let users = { users: [] };
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(400).json({ error: err });
        } else {
            for (let index = 0; index < result.length; index++) {
                const { user_id: id, name, password } = result[index];
                const user = { id: id, name: name, password: password };
                users.users.push(user);
            }
            res.status(200).json(users);
        }
    });
}


const getUser = (req, res) => {
    const { id, name, password } = req.body;
    const sql = `SELECT * FROM users WHERE user_id=?`;

    db.query(sql, [id], (err, result) => {
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        if (err) {
            return res.status(400).json({ error: err });
        }

        bcrypt.compare(password, result[0].password, (err, match) => {
            const payload = { name };
            const token = jwt.sign(payload, req.app.get('api_secret_key'), {
                expiresIn: 720
            });
            res.status(200).json({match, token, name, password});
        });

    });
}

module.exports = {
    addUser,
    getUsers,
    getUser,
}


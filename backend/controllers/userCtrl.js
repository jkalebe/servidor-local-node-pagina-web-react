const db = require('../models/database')

const userCtrl = {
    getList: async(req, res) => {

        try {
            const sql = "select * from user where name LIKE ?"
            const name = '%' + req.headers.name + '%'
            console.log(req.headers.name)
            const params = [name]
            db.all(sql, params, (err, rows) => {
                if (err) {
                  res.status(400).json({"error":err.message});
                  return;
                }
                res.json({
                    "message":"success",
                    "data":rows
                })
            })
        } catch (error) {
            
        }
    },

    registerUser: async(req, res) =>{
        try {
            console.log(req.body)
            var insert = 'INSERT INTO user (name, idade, cpf, data_nasc) VALUES(?,?,?,?)';
            const {name, idade, cpf, data_nasc} = req.body
            const params = [name, idade, cpf, data_nasc]
            db.run(insert, params, (err, rows) => {
                if (err) {
                  res.status(400).json({"error":err.message});
                  return;
                }
                res.json({
                    "message":"success",
                    "data":rows
                })
            })
        } catch (error) {
        }
    }
}

module.exports = userCtrl
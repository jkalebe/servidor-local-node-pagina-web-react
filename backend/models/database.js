var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err)=>{
    if(err){
        console.error(err.message)
        throw err
    }else{
        console.log("Connected to the SQLite database.")
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            idade INTEGER,
            cpf text,
            data_nasc text
        )`,
        (err) => {
            if(err) {
                console.log("error database")
            }else{
                console.log("database connected with success")
            }
        })
    }
});

module.exports = db
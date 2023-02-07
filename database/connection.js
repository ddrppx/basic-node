const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/sqlite.db', (err) => {
    if(err){
        return console.error(err.message);
    }

    console.log('Connected to Database');
});

sql = "SELECT * FROM users"

db.all(sql, [], (err, rows) => {
    if(err){
        console.log(err.message);
        throw err;
    }

    rows.forEach((row) =>{
        console.log(row);
    })
})

db.close()

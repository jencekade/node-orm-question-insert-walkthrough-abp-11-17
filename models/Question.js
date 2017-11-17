const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }

  constructor(content){
    this.content = content
  }
  insert (){
    const self = this;
    const sql = `INSERT INTO questions (content) VALUES (?)`;
    return new Promise(function(resolve){
      db.run(sql, [self.content], function (result){
        self.id = this.lastID;
        resolve(self);
      });
    });

  }
}

module.exports = Question;

 /*I know that db.run function takes in 3 parmeters
 SQL, the new content which we defined with const self, and function 
 but why does the function in the third parameter
 take in err and result as arguments?
 I dont even see a throw error.*/
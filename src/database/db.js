//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

 //criar o objeto que ira fazer operacoes no banco de dados

const db = new sqlite3.Database ("./src/database/database.db")

module.exports = db 
     
//utilizar o objeto de banco de dados,para nossas operacoes

 db.serialize(() => {
//     //criar uma tabela com comandos SQL

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           image TEXT,
//           name TEXT,
//           address TEXT,
//           address2 TEXT,
//           state TEXT,
//           city TEXT,
//           items TEXT
//        );           
//     `)

//     //inserir dados na tabela 
  
//   const query = `
//      INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//         "Papersider",
//         "Guilherme Gemballa,Jardim America",
//         "Numero 260",
//         "Santa Catarina",
//         "Rio Do sul",
//         "Residuos eletronicos,Lampadas"


//     ]
//      function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)      

//      } 

//    db.run(query, values, afterInsertData)

   //3consultar dados 
//    db.all(`SELECT name FROM places`, function(err, rows) {
//     if(err){
//         return console.log(err)
//     }
//     console.log("Aqui estao seus registros ")
//     console.log(rows)
// })
             

    //4deletar um dado 

//     db.run(`DELETE FROM places WHERE id = ?` , [4], function(err){
//          if (err) {
//              return console.log(err)
//          }

//          console.log("Registro deletado com sucesso")
//     })

  

})
